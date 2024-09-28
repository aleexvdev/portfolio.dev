import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";

export const ScrollUp = () => {

  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const controls = useAnimation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    const interval = setInterval(() => {
      if (isVisible) {
        controls.start({
          y: [0, -10, 0],
          transition: { duration: 1, ease: "easeInOut" },
        })
      }
    }, 5000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      clearInterval(interval)
    }
  }, [isVisible, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      className={`fixed bottom-3 right-3 md:bottom-3 md:right-3 lg:bottom-8 lg:right-8 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: isVisible ? 1 : 0, rotate: isVisible ? 0 : -180 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.button
        className={`bg-[#959595] dark:bg-[#181818] bg-opacity-20 backdrop-blur-md rounded-full p-3 ${isVisible ? 'shadow-2xl' : 'shadow-xl'} text-[#181818] dark:text-[#d2d2d2] border dark:border-[#1f1f1f] border-opacity-30 hover:bg-opacity-30 transition-colors duration-300`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={controls}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};
