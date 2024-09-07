import React from "react";

export const FormContact = () => {
  return (
    <div className="w-full h-full bg-transparent">
      <form className="my-8">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 row-span-1 flex flex-col space-y-2 bg-black mb-4">
            <label className="text-sm md:text-base lg:text-lg font-medium text-black dark:text-white/75 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Nombres</label>
            <div>
              <input type="text" name="name" id="name" />
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col space-y-2 bg-black mb-4">
            <label className="text-sm md:text-base lg:text-lg font-medium text-black dark:text-white/75 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Correo</label>
            <div>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="col-span-2 row-span-1 flex flex-col space-y-2 bg-black mb-8">
            <label className="text-sm md:text-base lg:text-lg font-medium text-black dark:text-white/75 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">Mensaje</label>
            <div>
              <input type="texts" name="message" id="message" />
            </div>
          </div>
          <div className="col-span-2 row-span-1 bg-black border border-gray-700/20 rounded-3xl p-7">
            <div className="w-full h-full flex items-center justify-center gap-x-4">
              <button className="w-full h-full flex items-center justify-center bg-white/10 rounded-xl px-5 py-3 text-white hover:text-[#22C55E]">
                Enviar
              </button>
              <button className="w-full h-full flex items-center justify-center bg-white/10 rounded-xl px-5 py-3 text-white hover:text-[#22C55E]">
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
