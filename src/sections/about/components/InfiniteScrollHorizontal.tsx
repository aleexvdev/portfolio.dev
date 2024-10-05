import { motion } from "framer-motion";
import type { ImageGallery } from "../types/type";

interface Props {
  images: ImageGallery[];
}

export const InfiniteScrollHorizontal = ({ images }: Props) => {
  return (
    <div
      className="w-full h-max max-w-3xl flex flex-col justify-center select-none overflow-hidden hover-pause"
      style={{
        maskImage:
          "linear-gradient(to left,rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
      }}
    >
      <div className="w-max flex flex-nowrap space-x-6 animate-slide-logos">
        {images.concat(images).map((image, key) => (
          <motion.img
            key={key}
            src={image.path_dark}
            alt={image.alt}
            loading="lazy"
            className="w-auto h-12 md:h-14 lg:h-14 object-cover p-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>
    </div>
  );
};
