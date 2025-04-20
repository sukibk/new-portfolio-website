import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { motion } from "framer-motion";
import React, { useState } from "react";

import CurrentTechStackDropProps from "@/app/components/about/CurrentTechStackDroppable";
import TechnologiesContainer from "@/app/components/about/tech/TechnologiesContainer";
import TechSwitch from "@/app/components/about/tech/TechSwitch";
import ScrollWrapper from "@/app/components/layout/ScrollWrapper";
import AngledText from "@/app/components/shared/AngledText";
import { TECH_CONSTS } from "@/app/constants/tech";

interface AboutGraphicsProps {
  children?: React.ReactNode;
}

const AboutGraphics = ({ children }: AboutGraphicsProps) => {
  const [myTechStackIndex, setMyTechStack] = useState<number>(0);

  const handleMyTechStackChange = (index: number) => {
    setMyTechStack(index);
  };

  const [droppedTech, setDroppedTech] = useState<{
    id: number;
    value: string;
  }>({ id: 0, value: "All" });

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    if (over?.id === "droppable") {
      // Get the index and label
      const value = active.id as string;
      const index = TECH_CONSTS.findIndex((item) => item === value);
      setDroppedTech({ id: index, value });
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full pt-20 md:pt-0 gap-8">
      <DndContext onDragEnd={handleDragEnd}>
        <ScrollWrapper className="flex justify-center items-center">
          <div>
            <AngledText side="left" className="!-mt-[10px] absolute">
              let
            </AngledText>
            <motion.h3
              className="text-foreground-title text-3xl gap-1 md:text-4xl xl:text-5xl font-bold transition-all duration-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              myTec
              <span className="text-primary mr-3 transition-all duration-500">
                hStack =
              </span>
            </motion.h3>
          </div>

          <CurrentTechStackDropProps droppedTech={droppedTech} />
        </ScrollWrapper>
        <TechSwitch
          activeIndex={myTechStackIndex}
          setActiveIndex={handleMyTechStackChange}
          indexDropped={droppedTech.id}
        />

        <TechnologiesContainer droppedTech={droppedTech} />
      </DndContext>
    </div>
  );
};

export default AboutGraphics;
