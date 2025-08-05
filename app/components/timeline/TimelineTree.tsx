import { useIsMobile } from "@/app/hooks/useIsMobile";

import DownloadResumeButton from "./DownloadResumeButton";
import TimelineCard from "./TimelineCard";
import TimelineContainer from "./TimelineContainer";

const TimelineTree = () => {
  const isMobile = useIsMobile();

  return (
    <div className="h-full flex flex-1 flex-col items-center">
      <TimelineContainer />
      <DownloadResumeButton
        variant="displaySmall"
        className="mt-10 ml-[3.2rem] md:ml-0"
      />
    </div>
  );
};

export default TimelineTree;
