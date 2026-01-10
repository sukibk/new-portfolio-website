import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary" | "skeleton";
  loading?: boolean;
}

/**
 * Button Component
 *
 * A flexible, styled button with optional variants and loading state.
 * Supports forwarding refs and native button props.
 *
 * Variants:
 * - "primary" – Solid primary color with hover transition
 * - "secondary" – Secondary color with hover styles
 * - "skeleton" – Transparent background with border for minimal UI
 *
 * If `loading` is true, disables the button and shows a loading text.
 *
 * @example
 * <Button variant="primary" onClick={handleClick}>Submit</Button>
 *
 * @example
 * <Button variant="skeleton" loading>Loading...</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", loading = false, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "p-3 px-5 rounded-xl hover:scale-105 font-bold cursor-pointer relative overflow-hidden",
          "transition-all duration-300 ease-out",
          "shadow-md hover:shadow-lg active:scale-100",
          variant === "primary" &&
            "bg-button-primary-bg hover:bg-button-primary-bg-hover " +
              "text-button-primary-fg hover:text-button-primary-fg-hover " +
              "shadow-primary/20 hover:shadow-primary/30",
          variant === "secondary" &&
            "bg-button-secondary-bg text-button-secondary-fg " +
              "hover:text-button-secondary-fg-hover hover:bg-button-secondary-bg-hover " +
              "shadow-black/10 dark:shadow-black/30",
          variant === "skeleton" &&
            "border-2 border-button-skeleton-fg/30 bg-button-skeleton-bg text-button-skeleton-fg " +
              "hover:bg-button-skeleton-bg-hover hover:text-button-skeleton-fg-hover " +
              "hover:border-transparent shadow-none hover:shadow-lg",
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
