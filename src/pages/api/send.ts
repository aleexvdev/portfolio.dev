import { TemplateEmail } from '@/sections/contact/components/TemplateEmail';
import type { APIRoute, APIContext } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async (context: APIContext) => {
  const request = context.request;
  try {
    const { email, name, subject, message } = await request.json();

    const result = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alexvalverde.dev@gmail.com'],
      subject: subject || 'Contacto',
      react: TemplateEmail({ email, name, subject, message  }), 
      text: '',
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        data: result,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}