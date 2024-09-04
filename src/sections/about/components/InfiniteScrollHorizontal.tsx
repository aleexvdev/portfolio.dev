import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { ImageGallery } from "../types/type";

interface Props {
  images: ImageGallery[];
}

export const InfiniteScrollHorizontal = ({ images }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const intervalIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startScrolling = () => {
    if (intervalIdRef.current) return;
    intervalIdRef.current = setInterval(() => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;
      if (
        scrollElement.scrollLeft + scrollElement.clientWidth >=
        scrollElement.scrollWidth
      ) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    }, 20);
  };

  const stopScrolling = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  };

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, []);

  useEffect(() => {
    if (isHovering) {
      stopScrolling();
    } else {
      startScrolling();
    }
  }, [isHovering]);

  return (
    <div 
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        ref={scrollRef}
        className="flex space-x-6 h-max overflow-hidden scrollbar-hide"
        whileTap={{ cursor: "grabbing" }}
        style={{ maskImage: "linear-gradient(to left,rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))" }}
      >
        {images.concat(images).map((image, index) => (
          <motion.div
            key={`${image.id}-${index}`}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.path_dark}
              alt={image.alt}
              className="w-auto h-14 md:h-16 object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
