import { ReactNode } from "react";

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const ArticleCard = ({ children, className, ...props }: ArticleCardProps) => {
  return (
    <article
      className={`rounded-xl bg-background backdrop-blur-md shadow-xl transition-colors duration-500 ${className || ""}`}
      {...props}
    >
      {children}
    </article>
  );
};

export default ArticleCard;
