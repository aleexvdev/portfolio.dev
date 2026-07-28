import { TemplateEmail } from '@/components/react/TemplateEmail';
import { schema } from '@/lib/middleware';
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import * as yup from 'yup';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
const jsonHeaders = { 'Content-Type': 'application/json' };

export const POST: APIRoute = async ({ request }) => {
  let body;

  const raw = await request.text();
  try {
    body = JSON.parse(raw);
  } catch (error) {
    console.error("Error al parsear JSON:", error);
    return new Response(JSON.stringify({ error: "Cuerpo JSON inválido o mal formado.", success: false }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return new Response(JSON.stringify({ error: 'Cuerpo de solicitud inválido.', success: false }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const { turnstileToken, ...formFields } = body;

  if (!turnstileToken || typeof turnstileToken !== 'string') {
    return new Response(JSON.stringify({ error: 'Datos inválidos en la solicitud.', success: false }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  // Verificar Turnstile
  let turnstileResult: { success?: boolean };
  try {
    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: secretKey, response: turnstileToken }),
      signal: AbortSignal.timeout(10_000),
    });

    turnstileResult = await turnstileRes.json();
  } catch (error) {
    console.error('Error al verificar Turnstile:', error);
    return new Response(JSON.stringify({ error: 'Error al verificar Turnstile.', success: false }), {
      status: 502,
      headers: jsonHeaders,
    });
  }

  if (!turnstileResult.success) {
    return new Response(JSON.stringify({ error: 'Verificación de Turnstile fallida.', success: false }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  let name: string;
  let email: string;
  let subject: string;
  let message: string;

  try {
    ({ name, email, subject, message } = await schema.validate(formFields, { abortEarly: true }));
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return new Response(JSON.stringify({ error: error.message, success: false }), {
        status: 400,
        headers: jsonHeaders,
      });
    }

    console.error('Error inesperado al validar solicitud:', error);
    return new Response(JSON.stringify({ error: 'Datos inválidos en la solicitud.', success: false }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  // Enviar correo
  try {
    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alexvalverde.dev@gmail.com'],
      subject: subject || 'Contacto',
      react: TemplateEmail({ email, name, subject, message }),
      text: '',
    });

    if (error) {
      console.error('Error al enviar correo (Resend):', error);
      return new Response(JSON.stringify({ error: 'Error al enviar el correo.', success: false }), {
        status: 502,
        headers: jsonHeaders,
      });
    }

    return new Response(JSON.stringify({ message: '¡Email enviado con éxito!', success: true }), {
      status: 200,
      headers: jsonHeaders,
    });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo.', success: false }), {
      status: 500,
      headers: jsonHeaders,
    });
  }
};
