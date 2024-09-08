import { ButtonForm } from "@/components/react/ButtonForm";
import { InputForm } from "@/components/react/InputForm";
import { TextAreaForm } from "@/components/react/TextAreaForm";

export const FormContact = () => {
  return (
    <div className="w-full h-full">
      <form className="my-8">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 row-span-1 flex flex-col space-y-2 mb-2">
            <InputForm
              label="Nombres"
              placeholder="Son Gokú"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="col-span-1 row-span-1 flex flex-col space-y-2 mb-2">
            <InputForm
              label="Correo"
              placeholder="sayayin.ss3@gmail.com"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="col-span-2 row-span-1 flex flex-col space-y-2 mb-2">
            <InputForm
              label="Asunto"
              placeholder="Sobre tu último proyecto..."
              type="text"
              name="subject"
              id="subject"
            />
          </div>
          <div className="col-span-2 row-span-1 flex flex-col space-y-2">
            <TextAreaForm
              label="Mensaje"
              placeholder="Déjame saber tus pensamientos, preguntas o ideas..."
              name="message"
              id="message"
            />
          </div>
          <div className="col-span-2 row-span-1 rounded-3xl mt-7">
            <div className="w-full h-full flex items-center justify-center gap-x-4">
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
                background="bg-transparent"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
