/* import nodemailer from 'nodemailer';

interface EmailOptions {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export const sendEmail = async (options: EmailOptions) => {
  // Crear el transportador para enviar el correo
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Accediendo a las variables de entorno
    port: parseInt(process.env.EMAIL_PORT || "587"), // Asegurarse de que sea un número
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: process.env.EMAIL_USER, // Usuario de email
      pass: process.env.EMAIL_PASS, // Contraseña de email
    },
  });

  // Contenido del correo electrónico
  let body = {
    from: options.email, // Dirección del remitente
    to: process.env.EMAIL_USER, // Destinatario (puedes cambiar esto según tus necesidades)
    subject: options.subject, // Asunto del correo
    html: `
      <h1>${options.subject}</h1>
      <p><strong>Name:</strong> ${options.name}</p>
      <p><strong>Email:</strong> ${options.email}</p>
      <p><strong>Message:</strong> ${options.message}</p>
    `,
  };

  try {
    // Enviar el correo
    await transporter.sendMail(body);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}; */
