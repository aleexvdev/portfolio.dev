import { TemplateEmail } from '@/components/react/TemplateEmail';
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  let body;

  const raw = await request.text();
  try {
    body = JSON.parse(raw);
  } catch (error) {
    console.error("Error al parsear JSON:", error);
    return new Response(JSON.stringify({ error: "Cuerpo JSON inválido o mal formado." }), {
      status: 400,
    });
  }

  const { name, email, subject, message, turnstileToken } = body;

  // Validación simple
  if (
    !name || typeof name !== 'string' ||
    !email || typeof email !== 'string' || !isValidEmail(email) ||
    !subject || typeof subject !== 'string' ||
    !message || typeof message !== 'string' ||
    !turnstileToken || typeof turnstileToken !== 'string'
  ) {
    return new Response(JSON.stringify({ error: 'Datos inválidos en la solicitud.' }), {
      status: 400,
    });
  }

  // Verificar Turnstile
  const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: secretKey, response: turnstileToken }),
  });

  const turnstileResult = await turnstileRes.json();
  if (!turnstileResult.success) {
    return new Response(JSON.stringify({ error: 'Verificación de Turnstile fallida.' }), {
      status: 400,
    });
  }

  // Enviar correo
  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alexvalverde.dev@gmail.com'],
      subject: subject || 'Contacto',
      react: TemplateEmail({ email, name, subject, message }),
      text: '',
    });

    return new Response(JSON.stringify({ message: '¡Email enviado con éxito!', success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return new Response(JSON.stringify({ error: "Error al enviar el correo.", success: false }), {
      status: 500,
    });
  }
};
