import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { TechSwitchProps } from "@/app/components/about/tech/TechSwitch";
import AngledText from "@/app/components/shared/AngledText";
import { cn } from "@/lib/utils";
import useAppStore from "@/app/storage/zustandLocal";

interface TechSwitchElementProps extends TechSwitchProps {
  id: number;
  value: string;
  variant?: "active" | "non-active";
}

const shakeVariants = {
  idle: {},
  shake: {
    x: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.5 },
  },
};

const TechSwitchElement = ({
  setActiveIndex,
  id,
  value,
  indexDropped,
  variant = "non-active",
}: TechSwitchElementProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: value,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const isDroppedItem = id === indexDropped;

  const { draggedFirst, setDraggedFirst } = useAppStore();
  const [showHint, setShowHint] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);

  // Checking variant makes sure shaking doesn't happen when FrontEnd is selected
  const isFirst = value === "FrontEnd" && variant !== "active";

  // Animation trigger logic
  useEffect(() => {
    if (isFirst && !draggedFirst) {
      const interval = setInterval(() => {
        setShakeCount((prev) => prev + 1);
      }, 4000);
      setShowHint(true);
      return () => clearInterval(interval);
    }
  }, [isFirst, draggedFirst]);

  // Track dragging event (simplified: when any transform occurs)
  useEffect(() => {
    if (isFirst && transform && !draggedFirst) {
      localStorage.setItem("draggedFirst", "true");
      setDraggedFirst();
      setShowHint(false);
    }
  }, [transform, isFirst, draggedFirst]);

  if (isDroppedItem) return null;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={cn(
        "relative text-foreground-title rounded-md p-3 shadow-md cursor-grab transition-colors duration-500 touch-none",
        variant === "active" && "w-[100px] text-center xl:text-xl",
        variant === "non-active" && "hover:bg-primary !hover:text-white"
      )}
      onClick={() => setActiveIndex(id)}
    >
      {isFirst && showHint && (
        <AngledText side="left" className="text-xs absolute -top-2 -left-1">
          drag me
        </AngledText>
      )}
      {/* Animate only the contents INSIDE */}
      {isFirst && !draggedFirst ? (
        <motion.div key={shakeCount} animate="shake" variants={shakeVariants}>
          <motion.p className="transition-all hover:!text-white duration-500 text-md">
            {value}
          </motion.p>
        </motion.div>
      ) : (
        <motion.div>
          <motion.p className="transition-all hover:!text-white duration-500 text-md">
            {value}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default TechSwitchElement;
