import clsx from "clsx";
import Image from "next/image";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import { useTimelineWidthChecker } from "@/app/hooks/useTimelineWidthChecker";

import ArticleCard from "../layout/ArticleCard";
import ScrollWrapper from "../layout/ScrollWrapper";

export interface TimelineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  logo: string;
  company: string;
  technologies: string[];
  variant?: "left" | "right";
  className?: string;
  invertLogo?: boolean;
}

// TODO: Wind fix for small phone screens
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
  let cardWidth = !showTwoColumns ? (isMobile ? 20 : 20) : 23.5; // 30
  let cardHeight = !showTwoColumns ? (isMobile ? 19 : 20) : 17; // 20
  if (!showTwoColumns && variant === "right") {
    variant = "left";
  }

  return (
    <ScrollWrapper
      className={clsx(
        "relative", // TODO: Fix for small widths should go here
        variant === "left" && "ml-[3rem]",
        className
      )}
      style={{ height: `${cardHeight}rem`, width: `${cardWidth + 4.8}rem` }}
    >
      <div
        className={clsx(
          `flex items-center absolute`,
          variant === "left" && "-left-[16px]",
          variant === "right" && "-right-[35.5px] flex-row-reverse"
        )}
      >
        {/* Dot */}
        <div
          className={clsx(
            "w-[2rem] h-[2rem] rounded-full bg-primary z-30",
            "shadow-lg shadow-primary/40 ring-4 ring-background",
            variant === "right" && "-ml-[0.9rem]",
            variant === "left" && "ml-0 -mr-[0.9rem]"
          )}
        ></div>
        {/* Line */}
        <div className="w-[3rem] h-[3px] bg-gradient-to-r from-primary to-primary/50"></div>
      </div>
      <ArticleCard
        className={clsx(
          "ml-[3rem] rounded-xl flex flex-col gap-1 overflow-hidden -mt-[20px] flex-1 px-4 !py-4",
          "text-foreground-text transition-all duration-500 font-bold",
          "hover:shadow-xl hover:shadow-primary/10",
          variant === "right" && "ml-0 mr-[3rem] border-r-2 border-r-primary",
          variant === "left" && "ml-[3rem] mr-0 border-l-2 border-l-primary"
        )}
        style={{ height: `${cardHeight}rem`, width: `${cardWidth}rem` }}
      >
        {/* Header row with logo and title */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="icon"
            width={36}
            height={36}
            className={`transition-all duration-500 opacity-80 hover:opacity-100 ${invertLogo ? "invert dark:invert-0" : ""}`}
          />
          <h3 className="text-xl md:text-2xl text-foreground-title flex-1 transition-colors duration-500">
            {title}
          </h3>
        </div>
        <div>
          <h4 className="text-lg md:text-xl text-foreground-text/80">
            {company}
          </h4>
        </div>
        <div>
          <p className="text-sm md:text-md text-foreground-text/60 font-code">
            <span className="text-primary/60">{`// `}</span>
            {date}
          </p>
        </div>
        <div className="overflow-hidden flex-1">
          <p className="text-[0.6rem] md:text-xs text-foreground-text/70 font-code leading-relaxed">
            <span className="text-primary/50">[</span>
            {technologies.map((tech, i) => (
              <span key={tech}>
                <span className="text-primary/80">{tech}</span>
                {i < technologies.length - 1 && (
                  <span className="text-foreground-text/40">, </span>
                )}
              </span>
            ))}
            <span className="text-primary/50">]</span>
          </p>
        </div>
      </ArticleCard>
    </ScrollWrapper>
  );
};

export default TimelineCard;
