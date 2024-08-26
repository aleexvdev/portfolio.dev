import {
  BriefcaseBusiness,
  FolderCode,
  LayoutDashboard,
  Mail,
  UserRound,
} from "lucide-react";
import { Drawer } from "vaul";

export const DialogMenu = () => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button className="flex items-center justify-center p-2 hover:bg-[#292929] rounded-md transition-colors duration-300 lg:hidden cursor-pointer">
          <LayoutDashboard className="w-5 h-5 text-white" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/60"/>
        <Drawer.Content className="bg-[#222121] flex flex-col rounded-t-2xl mt-24 fixed bottom-0 left-0 right-0 lg:hidden">
          <div className="p-4 bg-[#292929] rounded-t-2xl flex-1">
            <div className="mx-auto w-32 h-1.5 flex-shrink-0 rounded-full bg-zinc-500" />
            <div className="max-w-md mx-auto py-10 md:mb-8">
              <Drawer.Title className="font-medium"></Drawer.Title>
              <nav className="w-full flex flex-col items-center justify-center gap-y-3 mb-5">
                <li className="text-white list-none transition-colors duration-300 hover:text-[#FFEA9F]">
                  <a
                    href="#experience"
                    aria-label="experience"
                    className="flex items-center gap-x-3 cursor-pointer"
                  >
                    <BriefcaseBusiness className="w-5 h-5" />
                    <span className="text-base leading-6 font-medium text-nowrap">
                      Experiencia
                    </span>
                  </a>
                </li>
                <li className="text-white list-none transition-colors duration-300 ease-out hover:text-[#FFEA9F]">
                  <a
                    href="#projects"
                    aria-label="projects"
                    className="flex items-center gap-x-3 cursor-pointer"
                  >
                    <FolderCode className="w-5 h-5" />
                    <span className="text-base leading-6 font-medium text-nowrap">
                      Proyectos
                    </span>
                  </a>
                </li>
                <li className="text-white list-none transition-colors duration-300 ease-out hover:text-[#FFEA9F]">
                  <a
                    href="#about-me"
                    aria-label="about-me"
                    className="flex items-center gap-x-3 cursor-pointer"
                  >
                    <UserRound className="w-5 h-5" />
                    <span className="text-base leading-6 font-medium text-nowrap">
                      Sobre Mí
                    </span>
                  </a>
                </li>
                <li className="text-white list-none transition-colors duration-300 ease-out hover:text-[#FFEA9F]">
                  <a
                    href="#contact"
                    aria-label="contact"
                    className="flex items-center gap-x-3 cursor-pointer"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-base leading-6 font-medium text-nowrap">
                      Contacto
                    </span>
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
