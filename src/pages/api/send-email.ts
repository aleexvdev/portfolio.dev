import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { TemplateEmail } from '@/sections/contact/components/TemplateEmail';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, subject, message, turnstileToken } = body;

  const turnstileResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: turnstileToken,
      }),
    }
  );

  const turnstileResult = await turnstileResponse.json();

  if (!turnstileResult.success) {
    return new Response(JSON.stringify({ error: 'Turnstile verification failed' }), {
      status: 400,
    });
  }

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alexvalverde.dev@gmail.com'],
      subject: subject || 'Contacto',
      react: TemplateEmail({ email, name, subject, message  }), 
      text: '',
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }

};
