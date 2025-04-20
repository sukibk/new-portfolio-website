import { useDroppable } from "@dnd-kit/core";

import TechSwitchElement from "@/app/components/about/tech/TechSwitchElement";

interface CurrentTechStackDropProps {
  droppedTech: { id: number; value: string };
}

export default function CurrentTechStackDropProps({
  droppedTech,
}: CurrentTechStackDropProps) {
  const { isOver, setNodeRef } = useDroppable({ id: "droppable" });

  const style = {
    backgroundColor: isOver ? "#22c55e" : "var(--primary)",
    transition: "background-color 0.3s ease",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="rounded-md flex items-center justify-center w-[100px]"
    >
      <TechSwitchElement
        variant="active"
        id={droppedTech.id}
        value={droppedTech.value}
        activeIndex={-1}
        setActiveIndex={() => {}}
        indexDropped={-1} // or ignore this here entirely if you don’t need it
      />
    </div>
  );
}
