import { motion, type Variants } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export const AnimatedHero = ({ title, subtitle }: Props) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const colorBarVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5 } },
  };

  const CircleComponent: React.FC<{ className: string }> = ({ className }) => (
    <motion.div
      className={`w-4 h-4 rounded-full ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 0.5 }}
    />
  );

  const SquareComponent: React.FC<{ className: string }> = ({ className }) => (
    <motion.div
      className={`w-5 h-4 ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 0.5 }}
    />
  );

  const ColorBar: React.FC<{ className: string; width: string }> = ({
    className,
    width,
  }) => (
    <motion.div
      className={`h-4 ${className} ${width}`}
      variants={colorBarVariants}
    />
  );

  return (
    <motion.div
      className="w-full h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full flex flex-col gap-y-2">
        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar className="bg-gradient-aurora" width="w-20 md:w-40" />
          <ColorBar className="bg-gradient-sunset" width="w-16 md:w-24" />
          <CircleComponent className="bg-gradient-neon" />
          <ColorBar
            className="lg:block bg-gradient-purple-haze"
            width="w-10 md:w-16"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar className="bg-gradient-cyber-glow" width="w-40 md:w-80" />
          <ColorBar
            className="bg-gradient-velvet-night"
            width="w-24 md:w-24 lg:w-32"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar
            className="bg-gradient-solar-flare"
            width="w-12 md:w-24 lg:w-20"
          />
          <SquareComponent className="bg-gradient-ocean-breeze" />
          <ColorBar
            className="bg-gradient-mystic-dawn"
            width="w-8 md:w-16 lg:w-28"
          />
          <ColorBar
            className="bg-gradient-midnight-city"
            width="w-20 md:w-40 lg:w-44"
          />
          <ColorBar
            className="bg-gradient-tropical-sunset"
            width="w-20 md:w-20 lg:w-32"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar
            className="bg-gradient-arctic-aurora"
            width="w-20 md:w-44 lg:w-48"
          />
          <ColorBar
            className="bg-gradient-cosmic-dust"
            width="w-16 md:w-24 lg:w-32"
          />
          <CircleComponent className="bg-gradient-sunrise-glow" />
          <ColorBar
            className="bg-gradient-deep-sea"
            width="w-16 md:w-32 lg:w-40"
          />
          <ColorBar
            className="bg-gradient-flamingo-beach"
            width="w-16 md:w-20 lg:w-28"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2 ml-0 md:ml-10"
          variants={itemVariants}
        >
          <ColorBar
            className="bg-gradient-electric-violet"
            width="w-16 md:w-32 lg:w-44"
          />
          <SquareComponent className="bg-gradient-desert-mirage" />
          <ColorBar
            className="bg-gradient-mystic-forest"
            width="w-24 md:w-40 lg:w-52"
          />
          <ColorBar
            className="bg-gradient-sunset-boulevard"
            width="w-36 md:w-56 lg:w-64"
          />
        </motion.div>

        <motion.div
          className="w-full ml-0 md:ml-10 py-5 flex flex-col items-center md:items-start"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-normal text-wrap text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"
            style={{ textShadow: "0px 4px 6px rgba(0, 0, 0, 0.346)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-semibold text-stone-600 dark:text-stone-400 tracking-normal text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2 ml-0 md:ml-10"
          variants={itemVariants}
        >
          <ColorBar
            className="bg-gradient-sunset-boulevard"
            width="w-24 md:w-44 lg:w-56"
          />
          <CircleComponent className="bg-gradient-mystic-forest" />
          <ColorBar
            className="bg-gradient-desert-mirage"
            width="w-16 md:w-28 lg:w-40"
          />
          <ColorBar
            className="bg-gradient-electric-violet"
            width="w-36 md:w-56 lg:w-64"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar
            className="bg-gradient-deep-sea"
            width="w-24 md:w-40 lg:w-48"
          />
          <ColorBar
            className="bg-gradient-sunrise-glow"
            width="w-16 md:w-20 lg:w-28"
          />
          <ColorBar
            className="bg-gradient-cosmic-dust"
            width="w-14 md:w-32 lg:w-32"
          />
          <ColorBar
            className="bg-gradient-flamingo-beach"
            width="w-20 md:w-36 lg:w-44"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar
            className="bg-gradient-arctic-aurora"
            width="w-32 md:w-52 lg:w-56"
          />
          <ColorBar
            className="bg-gradient-tropical-sunset"
            width="w-16 md:w-24 lg:w-32"
          />
          <ColorBar
            className="bg-gradient-midnight-city"
            width="w-20 md:w-40 lg:w-44"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar className="bg-gradient-solar-flare" width="w-40 md:w-64" />
          <SquareComponent className="bg-gradient-mystic-dawn" />
          <ColorBar
            className="bg-gradient-ocean-breeze"
            width="w-16 md:w-32 lg:w-40"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-x-2"
          variants={itemVariants}
        >
          <ColorBar className="bg-gradient-neon" width="w-12 md:w-24" />
          <SquareComponent className="bg-gradient-purple-haze" />
          <ColorBar className="bg-gradient-cyber-glow" width="w-16 md:w-24" />
          <CircleComponent className="bg-gradient-sunset" />
          <ColorBar className="bg-gradient-aurora" width="w-12 md:w-24" />
        </motion.div>
      </div>
    </motion.div>
  );
};
