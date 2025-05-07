import ArticleCard from "../layout/ArticleCard";
import ScrollWrapper from "../layout/ScrollWrapper";
import clsx from "clsx";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { useTimelineWidthChecker } from "@/app/hooks/useTimelineWidthChecker";

interface TimelineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  description: string;
  variant?: "left" | "right";
  className?: string;
}

const TimelineCard = ({
  title,
  date,
  description,
  variant = "left",
  className = "",
}: TimelineCardProps) => {
  const isMobile = useIsMobile();
  const showTwoColumns = useTimelineWidthChecker();
  let cardWidth = !showTwoColumns ? (isMobile ? 20 : 22) : 23; // 30
  let cardHeight = !showTwoColumns ? (isMobile ? 15 : 17) : 13; // 20
  if (!showTwoColumns && variant === "right") {
    variant = "left";
  }

  const offset = 3;
  return (
    <ScrollWrapper
      className={`!relative ${className} ${variant === "left" && "ml-[3rem]"}`}
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
          ` ml-[3rem] rounded-md`,
          variant === "right" && "ml-0 mr-[3rem] border-r-2 border-r-primary",
          variant === "left" && "ml-[3rem] mr-0 border-l-2 border-l-primary"
        )}
        style={{ height: `${cardHeight}rem`, width: `${cardWidth}rem` }}
      >
        <h3
          className="text-xl font-bold text-foreground-title
      "
        >
          <h1 className="text-white">{showTwoColumns.toString()}</h1>
          {/* {title} */}
        </h3>
        <h4
          className="text-md font-bold text-foreground-text
      "
        >
          {date}
        </h4>
        <p
          className="text-sm font-bold text-foreground-text
      "
        >
          {description}
        </p>
      </ArticleCard>
    </ScrollWrapper>
  );
};

export default TimelineCard;
