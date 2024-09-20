import { ButtonForm } from "@/components/react/ButtonForm";
import { InputForm } from "@/components/react/InputForm";
import { TextAreaForm } from "@/components/react/TextAreaForm";
import { motion } from "framer-motion";

export const FormContact = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        className="my-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            className="col-span-1 row-span-1 flex flex-col space-y-2 mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <InputForm
              label="Nombres"
              placeholder="Son Gokú"
              type="text"
              name="name"
              id="name"
            />
          </motion.div>
          <motion.div
            className="col-span-1 row-span-1 flex flex-col space-y-2 mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <InputForm
              label="Correo"
              placeholder="sayayin.ss3@gmail.com"
              type="email"
              name="email"
              id="email"
            />
          </motion.div>
          <motion.div
            className="col-span-2 row-span-1 flex flex-col space-y-2 mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <InputForm
              label="Asunto"
              placeholder="Sobre tu último proyecto..."
              type="text"
              name="subject"
              id="subject"
            />
          </motion.div>
          <motion.div
            className="col-span-2 row-span-1 flex flex-col space-y-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <TextAreaForm
              label="Mensaje"
              placeholder="Déjame saber tus pensamientos, preguntas o ideas..."
              name="message"
              id="message"
            />
          </motion.div>
          <div className="col-span-2 row-span-1 rounded-3xl mt-7">
            <motion.div
              className="w-full h-full flex items-center justify-center gap-x-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <ButtonForm
                type="button"
                text="Enviar"
                className="w-full h-full flex items-center justify-center bg-transparent rounded-lg px-5 py-3 text-white border border-gray-700/20 hover:bg-gray-700/20 transition-colors duration-300"
                disabled={true}
              />
              <ButtonForm
                type="reset"
                text="Reset"
                className="w-full h-full flex items-center justify-center bg-transparent rounded-lg px-5 py-3 text-white border border-gray-700/20 hover:bg-gray-700/20 transition-colors duration-300"
                disabled={false}
              />
            </motion.div>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
};
