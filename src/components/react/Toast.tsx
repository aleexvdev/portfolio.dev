import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

export type ToastType = "success" | "error" | "loading" | "";

export interface ToastProps {
  type?: "success" | "error" | "loading" | "";
  message?: string;
  isVisible?: boolean;
  onHide?: () => void;
}

export const Toast = ({
  message = "",
  type = "",
  isVisible = false,
}: ToastProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const icons = {
    success: <CheckCircle className="w-6 h-6 text-green-500" />,
    error: <XCircle className="w-6 h-6 text-red-500" />,
    loading: <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />,
  };

  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    loading: "bg-blue-50 border-blue-200",
  };

  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      {isVisible && type ? (
        <motion.div
          key={type}
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          animate={{
            opacity: 1,
            transform: "translateX(0)",
            transition: { duration: 0.35, ease: easeOut },
          }}
          exit={{
            opacity: 0,
            transform: "translateX(-100px)",
            transition: { duration: 0.2, ease: easeOut },
          }}
          className={`fixed bottom-4 left-5 z-[9999] flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border ${bgColors[type]}`}
        >
          {icons[type]}
          <span className="text-gray-700 font-medium">{message}</span>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};
