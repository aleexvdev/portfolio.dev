import { T as TemplateEmail } from '../../chunks/TemplateEmail_BDVjwoiQ.mjs';
import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend(process.env.RESEND_API_KEY);
const POST = async (context) => {
  const request = context.request;
  try {
    const { email, name, subject, message } = await request.json();
    const result = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["alexvalverde.dev@gmail.com"],
      subject: subject || "Contacto",
      react: TemplateEmail({ email, name, subject, message }),
      text: ""
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        data: result
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
