import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  BriefcaseBusiness,
  FolderCode,
  UserRound,
  Mail,
  Menu,
} from "lucide-react";

const logo = "{av.}";
const navs = [
  {
    name: "Experiencia",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    name: "Proyectos",
    href: "#projects",
    icon: FolderCode,
  },
  {
    name: "Sobre mi",
    href: "#about",
    icon: UserRound,
  },
  {
    name: "Contacto",
    href: "#contact",
    icon: Mail,
  },
];

export function MenuToogle() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="navbar"
          size="icon"
          aria-label="Toggle menu"
          className="cursor-pointer border-none transition-all hover:scale-110 md:hidden"
        >
          <Menu className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-muted-foreground text-center">
              {"@alexvdev"}
            </DrawerTitle>
            <DrawerDescription>{""}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ul className="flex flex-col items-center justify-center gap-4">
              {navs.map((nav) => (
                <DrawerClose key={nav.name}>
                  <li>
                    <a
                      href={nav.href}
                      className={`text-white after:bg-foreground relative flex items-center gap-2 text-sm/6 font-semibold after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:text-blue-500 hover:after:w-full hover:after:bg-blue-500`}
                    >
                      <nav.icon className="h-6 w-6" />
                      <span className="text-sm/6 leading-6 font-semibold text-nowrap md:text-base lg:text-lg">
                        {nav.name}
                      </span>
                    </a>
                  </li>
                </DrawerClose>
              ))}
            </ul>
          </div>
          <DrawerFooter>
            <div className="mt-auto p-4">
              <div className="mx-auto flex max-w-md justify-center gap-x-4 text-white">
                <a
                  className="flex items-center gap-0.25 text-xs hover:text-[#2563EB]"
                  href="https://github.com/aleexvdev/"
                  target="_blank"
                >
                  GitHub
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="ml-1 h-3 w-3"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="flex items-center gap-0.25 text-xs hover:text-[#2563EB]"
                  href="https://www.linkedin.com/in/alexvdev/"
                  target="_blank"
                >
                  Linkedin
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="ml-1 h-3 w-3"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="flex items-center gap-0.25 text-xs hover:text-[#2563EB]"
                  href="https://www.facebook.com/alexvalverde666/"
                  target="_blank"
                >
                  Facebook
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="ml-1 h-3 w-3"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="flex items-center gap-0.25 text-xs hover:text-[#2563EB]"
                  href="https://www.instagram.com/alexvalverde._/"
                  target="_blank"
                >
                  Instagram
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="ml-1 h-3 w-3"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
