import { ReactNode } from "react";

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const ArticleCard = ({ children, className, ...props }: ArticleCardProps) => {
  return (
    <article
      className={`rounded-2xl bg-background/80 dark:bg-background/60 backdrop-blur-md
        shadow-xl shadow-black/5 dark:shadow-black/20
        transition-all duration-500
        ring-1 ring-foreground-title/5 dark:ring-white/5 ${className || ""}`}
      {...props}
    >
      {children}
    </article>
  );
};

export default ArticleCard;
