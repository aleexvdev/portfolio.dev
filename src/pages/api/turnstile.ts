import type { APIRoute, APIContext } from 'astro';

interface CloudflareTurnstileResponse {
  success: boolean;
  "error-codes": string[];
  challenge_ts: string;
  hostname: string;
}

export const POST: APIRoute = async (context: APIContext) => {
  const request = context.request;

  try {
    const { token } = await request.json();
    const secret = process.env.TURNSTILE_SECRET_KEY!;
    const ip = request.headers.get("x-forwarded-for");

    if (!secret || !token || !ip) {
      return new Response("Missing required parameters", { status: 400 });
    }

    let formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", token);
    formData.append("remoteip", ip);

    const urlFetch = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const response = await fetch(urlFetch, {
      method: "POST",
      body: formData,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });

    const { success } = await response.json() as CloudflareTurnstileResponse;

    if (!success) {
      return new Response(JSON.stringify({ success }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({ success }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error turnstile:', error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}