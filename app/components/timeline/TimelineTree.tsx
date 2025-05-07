import { useIsMobile } from "@/app/hooks/useIsMobile";
import TimelineCard from "./TimelineCard";
import TimelineContainer from "./TimelineContainer";

const TimelineTree = () => {
  const isMobile = useIsMobile();

  return (
    <div className="h-full flex flex-1 flex-col">
      <TimelineContainer />
    </div>
  );
};

export default TimelineTree;
