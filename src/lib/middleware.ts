import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().trim().email("Email inválido").required("El email es obligatorio"),
  name: yup.string().trim().min(3, "El nombre debe tener al menos 3 caracteres").required("El nombre es obligatorio"),
  subject: yup.string().trim().required("El asunto es obligatorio"),
  message: yup.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").required("El mensaje es obligatorio"),
});