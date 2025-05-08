import clsx from "clsx";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import { useTimelineWidthChecker } from "@/app/hooks/useTimelineWidthChecker";

import ArticleCard from "../layout/ArticleCard";
import ScrollWrapper from "../layout/ScrollWrapper";
import Image from "next/image";

export interface TimelineCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  logo: string;
  company: string;
  technologies: string[];
  variant?: "left" | "right";
  className?: string;
  invertLogo?: boolean;
}

const TimelineCard = ({
  title,
  logo,
  date,
  company,
  technologies,
  variant = "left",
  className = "",
  invertLogo = false,
}: TimelineCardProps) => {
  const isMobile = useIsMobile();
  const showTwoColumns = useTimelineWidthChecker();
  let cardWidth = !showTwoColumns ? (isMobile ? 20 : 22) : 23; // 30
  let cardHeight = !showTwoColumns ? (isMobile ? 18 : 20) : 17; // 20
  if (!showTwoColumns && variant === "right") {
    variant = "left";
  }

  const offset = 3;
  return (
    <ScrollWrapper
      className={`relative ${className} ${variant === "left" && "ml-[3rem]"}`}
      style={{ height: `${cardHeight}rem`, width: `${cardWidth + 4.8}rem` }}
    >
      <div
        className={clsx(
          `flex items-center absolute top-[${offset}rem] `,
          variant === "left" && "-left-[16px]",
          variant === "right" && "-right-[35.5px] flex-row-reverse"
        )}
      >
        {/* Dot */}
        <div
          className={clsx(
            "w-[2rem] h-[2rem] rounded-full bg-primary z-30",
            variant === "right" && "-ml-[0.9rem]",
            variant === "left" && "ml-0 -mr-[0.9rem]"
          )}
        ></div>
        {/* Line */}
        <div className="w-[3rem] h-[3px] bg-primary "></div>
      </div>
      <ArticleCard
        className={clsx(
          ` ml-[3rem] rounded-md  flex flex-col  gap-1 overflow-hidden -mt-[20px] flex-1 p-5 text-foreground-text transition-colors duration-500 font-bold`,
          variant === "right" && "ml-0 mr-[3rem] border-r-2 border-r-primary",
          variant === "left" && "ml-[3rem] mr-0 border-l-2 border-l-primary"
        )}
        style={{ height: `${cardHeight}rem`, width: `${cardWidth}rem` }}
      >
        <Image
          src={logo}
          alt="icon"
          width={40}
          height={40}
          className={`self-end transition-all duration-500 ${invertLogo ? "invert dark:invert-0" : ""}`}
        />
        <div>
          <h3
            className="text-2xl text-foreground-title flex-1 transition-colors duration-500
      "
          >
            {title}
          </h3>
        </div>
        <div>
          <h4
            className="text-xl flex-1
      "
          >
            {date}
          </h4>
        </div>
        <div>
          <p
            className="text-md flex-1
      "
          >
            {company}
          </p>
        </div>
        <div>
          <p
            className="text-sm flex-1
      "
          >
            Technologies: {technologies.join(", ")}
          </p>
        </div>
      </ArticleCard>
    </ScrollWrapper>
  );
};

export default TimelineCard;
