interface TemplateEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const TemplateEmail = ({ email, name, subject, message  }: TemplateEmailProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        ¡Gracias por contactarme, {name}!
      </h1>
      <p className="text-gray-700 mb-4">
        Hemos recibido tu mensaje y me pondremos en contacto con usted pronto.
      </p>
      <p className="text-gray-700 mb-6">
        Si necesitas asistencia inmediata, no dudes en comunicarte por este
        medio o por mis redes sociales.
      </p>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-purple-600">
          Detalles de contacto:
        </h2>
        <p className="text-gray-600">
          Nombre: <span className="font-bold">{name}</span>
        </p>
        <p className="text-gray-600">
          Correo electrónico:{" "}
          <span className="font-bold">{email}</span>
        </p>
        <p className="text-gray-600">
          Mensaje: <span className="font-bold">{message}</span>
        </p>
      </div>
      <div className="mt-6">
        <img
          src="https://alexvdev.netlify.app/og-image-es.png"
          alt="Banner"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-600">
          Síguenos en redes sociales:
        </h2>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-500 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            className="bg-blue-400 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-300 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            className="bg-purple-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-purple-500 transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            className="bg-blue-700 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};
