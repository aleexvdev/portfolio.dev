import { motion } from "framer-motion";
import { OctagonX } from "lucide-react";
import { easeOut } from "@/lib/motion";

interface FieldErrorProps {
  message?: string;
}

export function FieldError({ message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <motion.p
      className="ml-1.5 flex items-center gap-x-2 py-2 text-sm font-medium text-red-500 lg:text-base"
      initial={{ opacity: 0, transform: "translateY(-10px)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      exit={{ opacity: 0, transform: "translateY(-10px)" }}
      transition={{ duration: 0.3, ease: easeOut }}
    >
      <OctagonX className="h-5 w-5" />
      {message}
    </motion.p>
  );
}
