import {
  BriefcaseBusiness,
  FolderCode,
  LayoutDashboard,
  Mail,
  UserRound,
} from "lucide-react";
import { Drawer } from "vaul";
import { motion } from "framer-motion";

const navItems = [
  { href: "#experiencia", icon: BriefcaseBusiness, text: "Experiencia" },
  { href: "#proyectos", icon: FolderCode, text: "Proyectos" },
  { href: "#sobre-mi", icon: UserRound, text: "Sobre mi" },
  { href: "#contacto", icon: Mail, text: "Contacto" },
];

export const DialogMenu = () => (
  <Drawer.Root shouldScaleBackground>
    <Drawer.Trigger asChild>
      <button className="flex items-center justify-center p-2 hover:bg-[#d2d2d2] hover:dark:bg-[#292929] rounded-md transition-colors duration-300 md:hidden cursor-pointer">
        <LayoutDashboard className="w-5 h-5 text-black dark:text-white" />
      </button>
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/60" />
      <Drawer.Content className="bg-[#d2d2d2] dark:bg-[#222121] flex flex-col rounded-t-2xl mt-24 fixed bottom-0 left-0 right-0 lg:hidden">
        <motion.div
          className="p-4 bg-[#adadad] dark:bg-[#292929] rounded-t-2xl flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto w-32 h-1.5 flex-shrink-0 rounded-full bg-zinc-500" />
          <div className="max-w-md mx-auto py-10 md:mb-8">
            <Drawer.Title className="font-medium" />
            <nav className="w-full flex flex-col items-center justify-center gap-y-3">
              {navItems.map(({ href, icon: Icon, text }) => (
                <li
                  key={href}
                  className="text-black dark:text-white list-none transition-colors duration-300 ease-out hover:text-[#2563EB]"
                >
                  <a
                    href={href}
                    aria-label={text.toLowerCase()}
                    className="flex items-center gap-x-3 cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-base leading-6 font-semibold text-nowrap">
                      {text}
                    </span>
                  </a>
                </li>
              ))}
            </nav>
          </div>
        </motion.div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
);
