import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/app/components/about/Card";
import ScrollWrapper from "@/app/components/layout/ScrollWrapper";
import { TECH_OBJ } from "@/app/constants/tech";

interface TechnologiesContainerProps {
  droppedTech: {
    id: number;
    value: string;
  };
}

const TechnologiesContainer = ({ droppedTech }: TechnologiesContainerProps) => {
  let shownTech = TECH_OBJ.filter((tech) =>
    tech?.categories?.includes(droppedTech.value)
  );
  return (
    <ScrollWrapper className="flex flex-wrap gap-3 justify-center items-start gap-y-6 min-h-[125px] pb-20 md:pb-0">
      <AnimatePresence mode="wait">
        {shownTech.map((item, index) => (
          <Card
            key={item.label}
            iconLabel={item.label}
            iconSource={item.source}
          />
        ))}
      </AnimatePresence>
    </ScrollWrapper>
  );
};

export default TechnologiesContainer;
