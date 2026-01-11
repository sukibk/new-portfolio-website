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
        className="mt-10"
      />
    </div>
  );
};

export default TimelineTree;
