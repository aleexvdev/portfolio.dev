export { renderers } from '../../renderers.mjs';

const POST = async (context) => {
  const request = context.request;
  try {
    const { token } = await request.json();
    const secret = process.env.TURNSTILE_SECRET_KEY;
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip");
    console.log("ip:" + ip);
    console.log("token:" + token);
    if (!secret || !token || !ip) {
      return new Response(JSON.stringify({ success: false }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
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
        "content-type": "application/x-www-form-urlencoded"
      }
    });
    const { success } = await response.json();
    if (!success) {
      return new Response(JSON.stringify({ success }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(JSON.stringify({ success }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error turnstile:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
