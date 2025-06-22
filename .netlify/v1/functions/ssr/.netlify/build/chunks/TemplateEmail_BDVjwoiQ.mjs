import { jsxs, jsx } from 'react/jsx-runtime';

const TemplateEmail = ({
  email,
  name,
  subject,
  message
}) => {
  return /* @__PURE__ */ jsxs("div", { style: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      borderBottom: "2px solid #3498db",
      paddingBottom: "20px",
      marginBottom: "30px"
    }, children: [
      /* @__PURE__ */ jsx("h1", { style: {
        fontSize: "28px",
        fontWeight: "300",
        color: "#2c3e50",
        marginBottom: "10px",
        textAlign: "center"
      }, children: "Nuevo Mensaje de Contacto" }),
      /* @__PURE__ */ jsx("p", { style: {
        fontSize: "16px",
        color: "#7f8c8d",
        margin: "0",
        textAlign: "center"
      }, children: "Recibido a través de tu Portafolio Web" })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "6px",
      marginBottom: "30px",
      border: "1px solid #ecf0f1"
    }, children: [
      /* @__PURE__ */ jsx("h2", { style: {
        fontSize: "22px",
        color: "#2980b9",
        marginBottom: "15px",
        fontWeight: "400"
      }, children: "Detalles del Remitente" }),
      /* @__PURE__ */ jsxs("p", { style: {
        fontSize: "16px",
        color: "#34495e",
        margin: "0 0 10px 0",
        lineHeight: "1.6"
      }, children: [
        /* @__PURE__ */ jsx("strong", { children: "Nombre:" }),
        " ",
        name
      ] }),
      /* @__PURE__ */ jsxs("p", { style: {
        fontSize: "16px",
        color: "#34495e",
        margin: "0 0 10px 0",
        lineHeight: "1.6"
      }, children: [
        /* @__PURE__ */ jsx("strong", { children: "Email:" }),
        " ",
        email
      ] }),
      /* @__PURE__ */ jsxs("p", { style: {
        fontSize: "16px",
        color: "#34495e",
        margin: "0",
        lineHeight: "1.6"
      }, children: [
        /* @__PURE__ */ jsx("strong", { children: "Asunto:" }),
        " ",
        subject
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "6px",
      marginBottom: "30px",
      border: "1px solid #bdc3c7"
    }, children: [
      /* @__PURE__ */ jsx("h2", { style: {
        fontSize: "22px",
        color: "#2980b9",
        marginBottom: "15px",
        fontWeight: "400"
      }, children: "Mensaje" }),
      /* @__PURE__ */ jsx("p", { style: {
        fontSize: "16px",
        color: "#34495e",
        lineHeight: "1.6",
        whiteSpace: "pre-wrap",
        margin: "0"
      }, children: message })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      fontSize: "14px",
      color: "#7f8c8d",
      borderTop: "1px solid #ecf0f1",
      paddingTop: "20px",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsxs("p", { style: { margin: "0 0 10px 0" }, children: [
        "Este es un mensaje automático. Por favor, responde directamente a ",
        email,
        " para continuar la conversación."
      ] }),
      /* @__PURE__ */ jsx("p", { style: { margin: "0" }, children: "©2024 Alexander Valverde. Todos los derechos reservados." })
    ] })
  ] });
};

export { TemplateEmail as T };
