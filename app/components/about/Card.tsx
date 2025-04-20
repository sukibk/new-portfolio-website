import { motion } from "framer-motion";
import { techCardVariants } from "@/app/utils/framer-motion/variants";
import Image from "next/image";

interface CardProps {
  iconSource: string;
  iconLabel: string;
}

export const Card = ({ iconSource, iconLabel }: CardProps) => {
  return (
    <motion.div
      layout
      variants={techCardVariants}
      whileHover={{ scale: 1.1 }}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-gray-800/60  rounded-md touch-none text-white
      font-code flex items-center justify-center gap-2 font-semibold text-xs p-2 xl:p-3 xl:gap-3 xl:text-lg"
    >
      <Image
        src={`${iconSource}`}
        alt={`${iconLabel}`}
        width={25}
        height={25}
      />
      <p>{iconLabel}</p>
    </motion.div>
  );
};
