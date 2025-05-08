import TimelineCard from "./TimelineCard";
import { workExperiences } from "@/app/constants/work-experiences";

const TimelineContainer = () => {
  return (
    <article className="h-[80%] flex justify-center -ml-[2rem] md:ml-0">
      <div className="relative grid grid-cols-1 gap-y-10 resume:grid-cols-2 divide-foreground-title transition-all duration-500">
        <div className="absolute top-0 bottom-0 left-[3rem] resume:left-1/2 w-[0.3rem] bg-foreground-title rounded-full  -translate-x-1/2 transition-all duration-500" />
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
