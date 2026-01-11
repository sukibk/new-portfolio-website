"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaArrowLeft,
  FaCalendar,
  FaClock,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

import Footer from "@/app/components/footer/Footer";
import {
  blogPosts,
  categoryColors,
  categoryLabels,
} from "@/app/constants/blog";

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  const handleCopyScript = () => {
    if (post?.script) {
      navigator.clipboard.writeText(post.script);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-code">
        <p className="text-foreground-text/60 text-lg">{"// Post not found"}</p>
        <Link
          href="/blog"
          className="mt-4 text-primary hover:underline flex items-center gap-2"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="relative min-h-screen py-[6rem] md:py-[8rem] flex flex-col items-center px-5 transition-colors duration-500 w-full flex-1 font-lilita-one">
        {/* Back to blog link */}
        <div className="w-full max-w-4xl mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-text/60 hover:text-primary transition-colors duration-200 font-code text-sm"
          >
            <FaArrowLeft className="w-3 h-3" />
            <span>cd ../blog</span>
          </Link>
        </div>

        {/* Post header */}
        <div className="w-full max-w-4xl mb-8">
          <div>
            {/* Category badge */}
            <span
              className={`inline-block px-3 py-1 text-xs rounded-lg font-code font-semibold mb-4 ${categoryColors[post.category]}`}
            >
              {categoryLabels[post.category]}
            </span>

            {/* Title */}
            <h1 className="text-foreground-title text-3xl md:text-4xl xl:text-5xl font-bold mb-4 transition-colors duration-500">
              <span className="text-primary/70 font-code text-2xl md:text-3xl">
                {"// "}
              </span>
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 items-center text-foreground-text/50 font-code text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaCalendar className="w-3 h-3" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-3 h-3" />
                <span>{post.readTime} read</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-code bg-foreground-text/10 text-foreground-text/70 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Script section (if available) */}
        {post.script && (
          <div className="w-full max-w-4xl mb-8">
            <div className="relative">
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700/50">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-gray-400 text-xs font-code ml-2">
                      launch-script.sh
                    </span>
                  </div>
                  <button
                    onClick={handleCopyScript}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 text-primary rounded-md transition-all duration-200 font-code text-xs"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="w-3 h-3" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-3 h-3" />
                        Copy Script
                      </>
                    )}
                  </button>
                </div>
                {/* Code */}
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm font-code text-gray-300">
                    {post.script}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Post content */}
        <div className="w-full max-w-4xl">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-lilita-one prose-headings:text-foreground-title
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-foreground-text/10 prose-h2:pb-2
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-foreground-text/80 prose-p:font-sans prose-p:leading-relaxed
              prose-strong:text-foreground-title prose-strong:font-semibold
              prose-code:text-primary prose-code:bg-foreground-text/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-code prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700/50 prose-pre:rounded-xl
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-ul:text-foreground-text/70 prose-ol:text-foreground-text/70
              prose-li:marker:text-primary/50
              prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:text-foreground-text/70 prose-blockquote:not-italic
              prose-table:font-code prose-table:text-sm
              prose-th:bg-foreground-text/10 prose-th:text-foreground-title prose-th:font-semibold
              prose-td:border-foreground-text/10
              prose-hr:border-foreground-text/10"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
          />
        </div>

        {/* Floating brackets decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <span className="absolute top-[10%] left-[3%] text-primary/10 text-6xl md:text-8xl font-code hidden lg:block">
            {"{"}
          </span>
          <span className="absolute top-[15%] right-[3%] text-primary/10 text-6xl md:text-8xl font-code hidden lg:block">
            {"}"}
          </span>
        </div>
      </article>
      <Footer />
    </>
  );
};

// Simple markdown parser (for now - can be replaced with a proper library later)
function parseMarkdown(markdown: string): string {
  return (
    markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code>$2</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      // Horizontal rules
      .replace(/^---$/gim, '<hr />')
      // Unordered lists
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      // Ordered lists
      .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
      // Tables (basic support)
      .replace(/\|(.+)\|/gim, (match) => {
        const cells = match.split('|').filter(cell => cell.trim());
        if (cells.some(cell => cell.includes('---'))) {
          return '';
        }
        const isHeader = match.includes('---') === false && markdown.indexOf(match) < markdown.indexOf('|---|');
        const tag = isHeader ? 'th' : 'td';
        return `<tr>${cells.map(cell => `<${tag}>${cell.trim()}</${tag}>`).join('')}</tr>`;
      })
      // Wrap lists
      .replace(/(<li>.*<\/li>\n?)+/gim, '<ul>$&</ul>')
      // Paragraphs
      .replace(/\n\n/gim, '</p><p>')
      // Line breaks
      .replace(/\n/gim, '<br />')
  );
}

export default BlogPostPage;
