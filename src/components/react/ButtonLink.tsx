import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  background?: string;
  target?: string;
}

export const ButtonLink = ({
  href,
  children,
  className = "",
  background = "bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800",
  target = "_blank",
}: ButtonLinkProps) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);


  return (
    <motion.a
      href={href}
      target={target}
      className={`relative w-full h-full rounded-md ${background} ${className}`}

      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-center space-x-2">
        {children}
      </div>
      {isHovered && (
        <>
          <motion.span
            className="absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-green-500 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.span
            className="absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-green-600 to-transparent blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}
    </motion.a>
  );
}
