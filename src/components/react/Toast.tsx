import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export type ToastType = "success" | "error" | "loading" | "";

export interface ToastProps {
  type: "success" | "error" | "loading" | "";
  message: string;
  isVisible: boolean;
  onHide?: () => void;
}

export const Toast = ({ message, type, isVisible, onHide }: ToastProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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
    <AnimatePresence>
      {isVisible && type !== "" && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100, transition: { duration: 0.2 } }}
          className="fixed bottom-4 left-5 z-50"
        >
          <motion.div
            layout
            className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border ${bgColors[type]}`}
          >
            {icons[type]}
            <span className="text-gray-700 font-medium text-sm md:text-base lg:text-lg">{message}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
