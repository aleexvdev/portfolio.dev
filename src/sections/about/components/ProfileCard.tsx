import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Slider } from "@/components/react/Slider";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";

export const ProfileCard = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<string>("");
  const controls = useAnimation();

  const motivationalQuotes = [
    "Si lo puedes imaginar, lo puedes programar.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "El código limpio es el arte de un programador.",
    "Siempre parece imposible hasta que se hace.",
    "El límite es solo una ilusión.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const toggleSave = () => {
    setIsSaved((prev) => !prev);
  };

  const handleShare = async () => {
    const quoteToShare =
      currentQuote || "Si lo puedes imaginar, lo puedes programar.";

    if (navigator.share) {
      try {
        const message = `${quoteToShare} - ${window.location.href}`;
        await navigator.share({
          title: "Motivación de Hoy",
          text: message,
          url: window.location.href,
        });
        console.log("Compartido con éxito");
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${quoteToShare} - ${window.location.href}`
        );
        alert("Mensaje copiado al portapapeles");
      } catch (error) {
        console.error("Error al copiar:", error);
      }
    }
  };

  return (
    <article className="flex flex-col items-center justify-stretch col-span-1 row-span-1 lg:col-span-1 lg:row-span-2 rounded-3xl p-6 md:p-7 border border-gray-600/20 bg-[#F1F5F9] dark:bg-[#181818] transition-colors duration-300 hover:shadow-xl">
      <header className="w-full h-max flex items-start justify-between">
        <div className="w-24 h-auto bg-black/80 dark:bg-white/80 rounded-full overflow-hidden border border-green-500">
          <img
            src="./images/profile.png"
            alt="Alexander Valverde"
            className="w-full h-full object-cover bg-transparent scale-110"
          />
        </div>
        <div className="w-full h-full ml-4 flex flex-col items-start justify-center gap-y-1">
          <h2 className="text-black dark:text-white text-xl md:text-xl lg:text-xl font-medium tracking-wide text-nowrap">
            Alexander Valverde
          </h2>
          <div className="w-full flex items-center justify-between gap-x-2">
            <span className="text-[#6E6E6F] font-normal text-base">
              @aleexvdev
            </span>
            <motion.span
              className="text-white/90 bg-[#22C55E] px-3 py-1 rounded-2xl font-light text-xs tracking-wide border border-green-600"
              initial={{ scale: 1, opacity: 1 }}
              animate={controls}
            >
              En línea
            </motion.span>
          </div>
        </div>
      </header>
      <div className="w-full h-full min-h-52 lg:min-h-0 bg-black/90 dark:bg-neutral-800/50 mt-5 px-3 py-2 rounded-t-lg">
        <Slider
          quotes={motivationalQuotes}
          interval={5000}
          setCurrentQuote={setCurrentQuote}
        />
      </div>
      <div className="w-full h-16 flex items-center justify-between bg-white px-3 rounded-b-lg shadow-xl">
        <div className="w-full h-full flex items-center justify-start gap-x-4">
          <button
            onClick={toggleLike}
            className={`${isLiked ? "" : "hover:scale-110 hover:text-red-600"} transition-all duration-300`}
          >
            <motion.div
              animate={{ scale: isLiked ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isLiked ? (
                <Heart className="w-5 h-5 text-red-600 fill-red-600 transition-colors duration-300" />
              ) : (
                <Heart className="w-5 h-5" />
              )}
            </motion.div>
          </button>
          <a
            href="https://www.linkedin.com/in/alexvdev/"
            target="_blank"
            aria-label="Linkedin"
            className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={handleShare}
            className="hover:text-orange-600 hover:scale-110 transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={toggleSave}
          className={`${isSaved ? "" : "hover:scale-110"} transition-all duration-300`}
        >
          {isSaved ? (
            <Bookmark className="w-5 h-5 text-blue-600 fill-blue-600 transition-colors duration-300" />
          ) : (
            <Bookmark className="w-5 h-5" />
          )}
        </button>
      </div>
    </article>
  );
};