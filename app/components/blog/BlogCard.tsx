"use client";

import Link from "next/link";
import { FaClock, FaCalendar } from "react-icons/fa";

import {
  type BlogPost,
  categoryColors,
  categoryLabels,
} from "@/app/constants/blog";

import ArticleCard from "../layout/ArticleCard";
import AngledText from "../shared/AngledText";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="h-full cursor-pointer hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-200">
        <ArticleCard
          className="h-full border border-foreground-text/10 dark:border-white/5 hover:border-primary/40
          transition-all duration-300 hover:shadow-xl hover:shadow-primary/10
          relative overflow-hidden group"
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="p-4 md:p-5 pt-5 md:pt-6 h-full flex flex-col font-code text-[0.65rem] md:text-xs relative z-10">
            {/* Header with angled text and title */}
            <div className="flex items-start justify-between mb-2">
              <div className="relative">
                <AngledText
                  side="left"
                  className="absolute -top-[0.8rem] left-0 -mb-2"
                >
                  post
                </AngledText>
                <h3 className="text-foreground-title text-sm md:text-base font-bold">
                  {post.title.toLowerCase().replace(/\s+/g, "_").slice(0, 25)}
                  <span className="text-foreground-text/60 ml-1">=</span>
                  <span className="text-foreground-text/60 ml-1">{"{"}</span>
                </h3>
              </div>
            </div>

            {/* Post details */}
            <div className="flex-1 space-y-1.5 pl-3 md:pl-4">
              {/* Title */}
              <div className="flex gap-2">
                <span className="text-foreground-text/70">title:</span>
                <span className="text-foreground-text/80 flex-1">
                  &quot;{post.title}&quot;
                </span>
              </div>

              {/* Description */}
              <div className="flex gap-2">
                <span className="text-foreground-text/70">desc:</span>
                <span className="text-foreground-text/60 flex-1 line-clamp-2">
                  &quot;{post.description}&quot;
                </span>
              </div>

              {/* Meta info */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-1 text-foreground-text/50">
                  <FaCalendar className="w-2.5 h-2.5" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1 text-foreground-text/50">
                  <FaClock className="w-2.5 h-2.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 items-start">
                <span className="text-foreground-text/70">tags:</span>
                <span className="text-foreground-text/50">[</span>
                <div className="flex-1 flex flex-wrap gap-1">
                  {post.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="text-primary/90">
                      &quot;{tag}&quot;
                      {i < Math.min(3, post.tags.length - 1) && (
                        <span className="text-foreground-text/40">,</span>
                      )}
                    </span>
                  ))}
                  {post.tags.length > 4 && (
                    <span className="text-foreground-text/50">
                      ...+{post.tags.length - 4}
                    </span>
                  )}
                </div>
                <span className="text-foreground-text/50">]</span>
              </div>
            </div>

            {/* Closing bracket with category badge */}
            <div className="mt-2 flex items-center justify-between">
              <span className="text-foreground-text/60">{"}"}</span>
              <span
                className={`px-2 py-0.5 text-[0.6rem] rounded-lg font-semibold ${categoryColors[post.category]}`}
              >
                {categoryLabels[post.category]}
              </span>
            </div>
          </div>
        </ArticleCard>
      </div>
    </Link>
  );
};

export default BlogCard;
