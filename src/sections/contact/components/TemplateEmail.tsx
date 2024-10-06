interface TemplateEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const TemplateEmail = ({
  email,
  name,
  subject,
  message,
}: TemplateEmailProps) => {
  return (
    <div style={{
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      maxWidth: '600px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        borderBottom: '2px solid #3498db',
        paddingBottom: '20px',
        marginBottom: '30px',
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '300',
          color: '#2c3e50',
          marginBottom: '10px',
          textAlign: 'center',
        }}>
          Nuevo Mensaje de Contacto
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#7f8c8d',
          margin: '0',
          textAlign: 'center',
        }}>
          Recibido a través de tu Portafolio Web
        </p>
      </div>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '6px',
        marginBottom: '30px',
        border: '1px solid #ecf0f1',
      }}>
        <h2 style={{
          fontSize: '22px',
          color: '#2980b9',
          marginBottom: '15px',
          fontWeight: '400',
        }}>
          Detalles del Remitente
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#34495e',
          margin: '0 0 10px 0',
          lineHeight: '1.6',
        }}>
          <strong>Nombre:</strong> {name}
        </p>
        <p style={{
          fontSize: '16px',
          color: '#34495e',
          margin: '0 0 10px 0',
          lineHeight: '1.6',
        }}>
          <strong>Email:</strong> {email}
        </p>
        <p style={{
          fontSize: '16px',
          color: '#34495e',
          margin: '0',
          lineHeight: '1.6',
        }}>
          <strong>Asunto:</strong> {subject}
        </p>
      </div>
      
      <div style={{
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '6px',
        marginBottom: '30px',
        border: '1px solid #bdc3c7',
      }}>
        <h2 style={{
          fontSize: '22px',
          color: '#2980b9',
          marginBottom: '15px',
          fontWeight: '400',
        }}>
          Mensaje
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#34495e',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
          margin: '0',
        }}>
          {message}
        </p>
      </div>
      
      <div style={{
        fontSize: '14px',
        color: '#7f8c8d',
        borderTop: '1px solid #ecf0f1',
        paddingTop: '20px',
        textAlign: 'center',
      }}>
        <p style={{margin: '0 0 10px 0'}}>
          Este es un mensaje automático. Por favor, responde directamente a {email} para continuar la conversación.
        </p>
        <p style={{margin: '0'}}>
          ©2024 Alexander Valverde. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};
