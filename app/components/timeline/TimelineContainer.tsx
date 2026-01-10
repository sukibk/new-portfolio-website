import { workExperiences } from "@/app/constants/work-experiences";

import DownloadResumeButton from "./DownloadResumeButton";
import TimelineCard from "./TimelineCard";

/**
 * TimelineContainer component
 * @returns {JSX.Element} - The TimelineContainer component
 */
const TimelineContainer = () => {
  return (
    <article className="flex flex-col items-center justify-center -ml-[3.2rem] md:ml-0">
      <div className="relative grid grid-cols-1 gap-y-15 md:gap-y-20 resume:grid-cols-2 transition-all duration-500">
        {/* Vertical line */}
        <div
          className="absolute top-0 bottom-0 left-[3rem] resume:left-1/2 w-[0.3rem] -translate-x-1/2 transition-all duration-500
          bg-gradient-to-b from-primary/20 via-foreground-title/40 to-primary/20 rounded-full"
        />
        {/* Timeline Cards */}
        {workExperiences.map((experience, index) => (
          <TimelineCard
            key={index}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            technologies={experience.technologies}
            logo={experience.logo}
            variant={experience.variant}
            className={experience.className}
            invertLogo={experience.invertLogo}
          />
        ))}
      </div>
    </article>
  );
};

export default TimelineContainer;
