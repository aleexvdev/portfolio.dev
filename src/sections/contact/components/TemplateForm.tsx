import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  AtSign,
  Loader2,
  Mail,
  MessagesSquare,
  OctagonX,
  RefreshCw,
  Send,
  ShieldAlert,
  UserRoundCheck,
} from "lucide-react";
import { ButtonComponent } from "@/components/react/ButtonComponent";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/useToast";
import { Toast } from "@/components/react/Toast";
import { schema } from "../lib/middleware";
import { TurnstileWidget } from "./TurnstileWidget";

export const TemplateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { toastState, showToast } = useToast();

  const onSubmit = async (formData: any) => {
    showToast("loading", "Enviando email...");
    try {
      const token = window.turnstile.getResponse();
      const rptaCf = await fetch("/api/cf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const { success } = await rptaCf.json();

      if (success) {
        console.log('soy un success');
        /* const response = await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(
            data.message || `HTTP error! status: ${response.status}`
          );
        }
        showToast("success", "¡Email enviado!");
        reset(); */
      } else {
        window.turnstile.reset();
        showToast(
          "error",
          "¡Error Interno! Por favor, inténtelo de nuevo más tarde."
        );
      }
    } catch (error) {
      showToast("error", "¡Error! Por favor, inténtelo de nuevo más tarde.");
      console.error("Error:", error);
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden w-full flex flex-col items-center justify-stretch rounded-3xl border border-gray-600/20 bg-[#F1F5F9] dark:bg-[#181818] transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="relative w-full h-auto flex items-center justify-end md:justify-center mt-1 mb-6 border-b border-gray-600/20 py-4 px-6">
        <div className="absolute top-0 left-0 w-max h-full flex items-center space-x-2 px-6 md:px-6 lg:px-8">
          <span className="w-4 h-4 rounded-full bg-red-600"></span>
          <span className="w-4 h-4 rounded-full bg-green-600"></span>
          <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
        </div>
        <h2 className="text-black dark:text-white text-base lg:text-lg font-medium">
          Nuevo mensaje
        </h2>
      </header>
      <div className="px-2 md:px-6 lg:px-8 pb-6 md:pb-6 lg:pb-8 w-full h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            className="h-full px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full flex flex-col items-center justify-center space-y-6">
              <motion.div
                className="w-full border-b border-gray-600/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center px-0 md:px-1">
                  <label
                    htmlFor="email"
                    className="text-black dark:text-white md:mr-2 mb-1 md:mb-0 min-w-[30px] text-base lg:text-lg font-medium flex items-center space-x-2"
                  >
                    <AtSign className="w-5 h-5" />
                    <span>Correo Electrónico:</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="sayayin.ss3@gmail.com"
                    className="flex-grow bg-transparent text-stone-600 dark:text-stone-400 placeholder:text-stone-500 px-1 md:px-2 py-1 text-base lg:text-base focus:outline-none focus:border-none autofill-custom-light dark:autofill-custom-dark"
                    required
                  />
                </div>
                {errors.email && (
                  <motion.p
                    className="text-red-500 text-sm flex items-center gap-x-2 py-2 ml-1.5 lg:text-base font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OctagonX className="w-5 h-5" />
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                className="w-full border-b border-gray-600/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center px-0 md:px-1">
                  <label
                    htmlFor="name"
                    className="text-black dark:text-white md:mr-2 mb-1 md:mb-0 min-w-[30px] text-base lg:text-lg font-medium flex items-center space-x-2"
                  >
                    <UserRoundCheck className="w-5 h-5" />
                    <span>Nombres:</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="Son Gokú"
                    className="flex-grow bg-transparent text-stone-600 dark:text-stone-400 placeholder:text-stone-500 px-1 md:px-2 py-1 text-base lg:text-base focus:outline-none focus:border-none autofill-custom-light dark:autofill-custom-dark"
                    required
                  />
                </div>
                {errors.name && (
                  <motion.p
                    className="text-red-500 text-sm flex items-center gap-x-2 py-2 ml-1.5 lg:text-base font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OctagonX className="w-5 h-5" />
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                className="w-full border-b border-gray-600/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center px-0 md:px-1">
                  <label
                    htmlFor="subject"
                    className="text-black dark:text-white md:mr-2 mb-1 md:mb-0 min-w-[30px] text-base lg:text-lg font-medium flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Asunto:</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject")}
                    placeholder="Sobre tu último proyecto..."
                    className="flex-grow bg-transparent text-stone-600 dark:text-stone-400 placeholder:text-stone-500 px-1 md:px-2 py-1 text-base lg:text-base focus:outline-none focus:border-none autofill-custom-light dark:autofill-custom-dark"
                    required
                  />
                </div>
                {errors.subject && (
                  <motion.p
                    className="text-red-500 text-sm flex items-center gap-x-2 py-2 ml-1.5 lg:text-base font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OctagonX className="w-5 h-5" />
                    {errors.subject.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                className="w-full flex flex-col items-center justify-start py-6 px-0 md:px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <label
                  htmlFor="message"
                  className="text-black dark:text-white md:mr-2 mb-4 md:mb-4 min-w-[30px] text-base lg:text-lg font-medium w-full flex items-center space-x-2"
                >
                  <MessagesSquare className="w-5 h-5" />
                  <span>Mensaje:</span>
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Déjame saber tus pensamientos, preguntas o ideas..."
                  className="w-full min-h-80 resize-none outline-none border-none p-4 md:p-6 rounded-xl bg-white/50 dark:bg-black shadow-lg shadow-white dark:shadow-black text-base lg:text-base font-normal text-pretty text-stone-800 dark:text-stone-400 dark:placeholder-[#8d8d8d] placeholder-[#999999]"
                ></textarea>
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-sm flex items-center gap-x-2 py-2 ml-1.5 lg:text-base font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OctagonX className="w-5 h-5" />
                    {errors.message.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                className="w-full flex flex-col md:flex-row items-center justify-center py-2 gap-y-4 md:gap-y-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center justify-center md:justify-start w-full">
                  <TurnstileWidget />
                </div>
                <div className="flex items-center justify-center md:justify-end w-full space-x-6">
                  <ButtonComponent type="reset" onClick={() => reset()}>
                    <RefreshCw className="w-5 h-5" />
                    <span className="text-base md:text-lg lg:text-xl font-medium">
                      Reset
                    </span>
                  </ButtonComponent>
                  <ButtonComponent
                    type="submit"
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      toastState.type === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5" />
                          <span className="text-base md:text-lg lg:text-xl font-medium">
                            Enviando
                          </span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span className="text-base md:text-lg lg:text-xl font-medium">
                            Enviar
                          </span>
                        </>
                      )
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span className="text-base md:text-lg lg:text-xl font-medium">
                          Enviar
                        </span>
                      </>
                    )}
                  </ButtonComponent>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </form>
      </div>
      <Toast {...toastState} />
    </motion.div>
  );
};
