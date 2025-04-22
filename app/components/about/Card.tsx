import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { techCardVariants } from "@/app/utils/framer-motion/variants";

interface CardProps {
  iconSource: string;
  iconLabel: string;
}

const CardComponent = ({ iconSource, iconLabel }: CardProps) => {
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
      <Image src={iconSource} alt={iconLabel} width={25} height={25} />
      <p>{iconLabel}</p>
    </motion.div>
  );
};

CardComponent.displayName = "Card";

export const Card = React.memo(CardComponent);
