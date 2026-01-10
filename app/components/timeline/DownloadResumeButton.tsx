"use client";

import clsx from "clsx";
import { useState } from "react";

import Button from "../layout/Button";

interface DownloadResumeButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "displayLarge" | "displaySmall" | "alwaysDisplay";
  className?: string;
}

/**
 * DownloadResumeButton component
 * @param {DownloadResumeButtonProps} props - The props for the DownloadResumeButton component
 * @returns {JSX.Element} - The DownloadResumeButton component
 */

//TODO: Upload updated resume
const DownloadResumeButton = ({
  variant = "alwaysDisplay",
  className,
}: DownloadResumeButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/resume");
      if (!response.ok) {
        throw new Error("Failed to download resume");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "MarkoSudar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={clsx(
        `${className}`,
        variant === "displaySmall" && "lg:hidden",
        variant === "displayLarge" && "hidden lg:block"
      )}
    >
      <Button variant="primary" onClick={handleDownload} disabled={loading}>
        {loading ? "Downloading..." : "Download Resume"}
      </Button>
    </div>
  );
};

export default DownloadResumeButton;
