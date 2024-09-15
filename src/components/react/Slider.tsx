import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SliderProps {
  quotes: string[];
  interval?: number;
  setCurrentQuote: (quote: string) => void;
}

export const Slider = ({ quotes, interval = 4000, setCurrentQuote }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);
    setCurrentQuote(quotes[currentIndex]);
    return () => clearInterval(timer); 
  }, [quotes, interval]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ x: "100%", opacity: 0 }} 
          animate={{ x: "0%", opacity: 1 }} 
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8 }} 
          className="absolute w-full text-center"
        >
          <p className="text-white text-lg lg:text-2xl font-medium text-pretty">
            {quotes[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-1 flex items-center gap-2">
        {quotes.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
