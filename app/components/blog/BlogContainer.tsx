"use client";

import { useState } from "react";

import {
  type BlogCategory,
  type BlogPost,
  blogPosts,
} from "@/app/constants/blog";

import BlogCard from "./BlogCard";

type FilterType = "all" | BlogCategory;

const BlogContainer = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === filter);

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: ".all()" },
    { key: "blog", label: ".blogs()" },
    { key: "tutorial", label: ".tutorials()" },
    { key: "script", label: ".scripts()" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Filter buttons with code-like syntax */}
      <div className="flex flex-wrap items-center gap-3 font-code text-xs md:text-sm">
        <span className="text-foreground-text">filter:</span>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-200 cursor-pointer ${
                filter === f.key
                  ? "bg-primary text-white"
                  : "bg-foreground-text/10 text-foreground-text hover:bg-foreground-text/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="text-foreground-text ml-auto">
          {"//"} {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "post" : "posts"}
        </span>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mt-4">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12 font-code text-foreground-text/50">
          <p className="text-lg">{"// No posts found"}</p>
          <p className="text-sm mt-2">
            <span className="text-primary/70">{"return "}</span>
            <span className="text-foreground-text/40">null;</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogContainer;
