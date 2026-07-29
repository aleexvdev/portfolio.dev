"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TurnstileWidget } from "./TurnstileWidget";
import { Toast } from "./Toast";
import {
  AtSign,
  UserCheck,
  Mail,
  MessagesSquare,
  RefreshCcw,
  Loader2,
  Send,
} from "lucide-react";
import { schema } from "@/lib/middleware";
import { useToast } from "@/hooks/useToast";
import { motion } from "framer-motion";
import { FieldError } from "./FieldError";

interface ContactFormProps {
  translations: {
    email: string;
    emailPlaceholder: string;
    name: string;
    namePlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    reset: string;
    sending: string;
    privacy: string;
  };
  heading: string;
  description: string;
}

declare global {
  interface Window {
    turnstile: any;
  }
}

interface SendForm {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  translations,
  heading,
  description,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SendForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { toastState, showToast } = useToast();
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const onSubmit = async (formData: SendForm) => {
    showToast("loading", "Enviando email...");

    if (!turnstileToken) {
      showToast("error", "Parece que no eres humano...");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (response.ok) {
        showToast("success", "¡Email enviado!");
        setTimeout(() => {
          reset();
        }, 1000);
      } else {
        showToast("error", "¡Error! Intente más tarde.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showToast("error", "¡Error! Por favor, inténtelo de nuevo más tarde.");
    }
  };

  return (
    <>
      <motion.div className="group relative mb-8 w-full rounded-2xl border border-white/10 bg-zinc-800/40 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-blue-500/20">
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <div className="mb-8 text-center">
          <h2 className="mt-4 text-3xl font-semibold text-pretty text-white md:text-4xl lg:mt-2">
            {heading}
          </h2>
          <p className="mt-2.5 w-full text-center text-base leading-relaxed font-medium text-pretty text-white/75 md:text-lg">
            {description}
          </p>
        </div>

        <form
          id="contact-form"
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <motion.div className="group relative w-full">
            <label
              htmlFor="email"
              className="mb-1 flex items-center gap-2 text-lg font-medium text-gray-300"
            >
              <AtSign
                className="text-blue-600 transition group-hover:scale-110"
                width="20"
                height="20"
              />
              {translations.email}
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              required
              placeholder={translations.emailPlaceholder}
              className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md text-white transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
            />
            {errors.email && <FieldError message={errors.email.message} />}
          </motion.div>
          <motion.div className="group relative w-full">
            <label
              htmlFor="name"
              className="mb-1 flex items-center gap-2 text-lg font-medium text-gray-300"
            >
              <UserCheck
                className="text-blue-600 transition group-hover:scale-110"
                width="20"
                height="20"
              />
              {translations.name}
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              required
              placeholder={translations.namePlaceholder}
              className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md text-white transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
            />
            {errors.name && <FieldError message={errors.name.message} />}
          </motion.div>
          <motion.div className="group relative w-full">
            <label
              htmlFor="subject"
              className="mb-1 flex items-center gap-2 text-lg font-medium text-gray-300"
            >
              <Mail
                className="text-blue-600 transition group-hover:scale-110"
                width="20"
                height="20"
              />
              {translations.subject}
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              required
              placeholder={translations.subjectPlaceholder}
              className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md text-white transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
            />
            {errors.subject && <FieldError message={errors.subject.message} />}
          </motion.div>
          <motion.div className="group relative w-full">
            <label
              htmlFor="message"
              className="mb-1 flex items-center gap-2 text-lg font-medium text-gray-300"
            >
              <MessagesSquare
                className="text-blue-600 transition group-hover:scale-110"
                width="20"
                height="20"
              />
              {translations.message}
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Déjame saber tus pensamientos, preguntas o ideas..."
              rows={5}
              className="mt-2 w-full resize-none rounded-lg bg-white/10 px-4 py-3 text-white backdrop-blur-md transition placeholder:font-normal placeholder:text-stone-400/65 focus:ring-2 focus:ring-transparent focus:outline-none"
            ></textarea>
            {errors.message && <FieldError message={errors.message.message} />}
          </motion.div>

          <div className="flex w-full justify-center">
            <TurnstileWidget onVerify={setTurnstileToken} />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2 py-2 text-center md:flex-row md:text-end">
            <button
              type="reset"
              onClick={() => reset()}
              className="flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-gray-500 to-gray-600 px-4 py-2 font-semibold text-white shadow-lg transition hover:from-gray-600 hover:to-gray-700 hover:shadow-xl focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none md:w-full"
            >
              <RefreshCcw
                className="mr-2 inline-block"
                width="20"
                height="20"
              />
              {translations.reset}
            </button>
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:w-full"
            >
              {isSubmitting ? (
                toastState.type === "loading" ? (
                  <>
                    <Loader2
                      className="mr-2 inline-block"
                      width="20"
                      height="20"
                    />
                    <span className="text-base font-medium md:text-lg">
                      {translations.sending}
                    </span>
                  </>
                ) : (
                  <>
                    <Send
                      className="mr-2 inline-block"
                      width="20"
                      height="20"
                    />
                    <span className="text-base font-medium md:text-lg">
                      {translations.submit}
                    </span>
                  </>
                )
              ) : (
                <>
                  <Send className="mr-2 inline-block" width="20" height="20" />
                  <span className="text-base font-medium md:text-lg">
                    {translations.submit}
                  </span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm font-semibold text-gray-400">
          <span>{translations.privacy}</span>
        </div>
      </motion.div>
      <Toast {...toastState} />
    </>
  );
};
