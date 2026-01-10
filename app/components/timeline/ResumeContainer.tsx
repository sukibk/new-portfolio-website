import Image from "next/image";

import useCheckBrowser from "@/app/hooks/useCheckBrowser";

import ScrollWrapper from "../layout/ScrollWrapper";
import AngledText from "../shared/AngledText";
import DownloadResumeButton from "./DownloadResumeButton";
import Resume from "./Resume";

const ResumeContainer = () => {
  const { isSafari, isFirefox } = useCheckBrowser();

  return (
    <aside className="relative h-full lg:flex lg:sticky lg:flex-col lg:top-[5rem] self-center pb-15 lg:pb-0 items-center max-w-[35rem] lg:self-start">
      <ScrollWrapper className="pt-5">
        <AngledText side="left" className="left-0 absolute top-[0.5rem]">
          kubectl get
        </AngledText>
        {/* Font for xl was 6xl but it braks on Firefox se I set it to 3.5rem */}
        <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] text-foreground-title">
          experiences/
          <span className="text-primary">Timeline</span>
        </h4>
      </ScrollWrapper>
      <ScrollWrapper className="flex flex-col items-center sticky top-[5rem]">
        <div className="hidden lg:block w-[28.5rem] xl:w-[30rem] h-[37rem] xl:h-[38.68rem] rounded-2xl
          border-t-3 border-b-3 border-primary overflow-hidden mt-10
          shadow-2xl shadow-black/10 dark:shadow-black/30
          ring-1 ring-foreground-title/5 dark:ring-white/5
          bg-background/50 backdrop-blur-sm">
          <Resume />
        </div>
        <DownloadResumeButton variant="displayLarge" className="mt-10" />
      </ScrollWrapper>
    </aside>
  );
};

export default ResumeContainer;
