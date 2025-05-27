import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BriefcaseBusiness, FolderCode, UserRound, Mail, Menu } from "lucide-react";

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
        <Button variant="outline" size="icon" aria-label="Toggle menu" className="cursor-pointer border-none md:hidden hover:scale-110 transition-all">
          <Menu className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-muted-foreground text-center">{"@alexvdev"}</DrawerTitle>
            <DrawerDescription>{""}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ul className="flex flex-col items-center justify-center gap-4">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <a
                    href={nav.href}
                    className="flex items-center gap-2 relative text-sm/6 font-semibold text-primary after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 hover:after:bg-blue-500"
                  >
                    <nav.icon className="w-6 h-6" />
                    <span className="font-semibold text-nowrap md:text-base lg:text-lg text-sm/6 leading-6">
                      {nav.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <DrawerFooter>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
