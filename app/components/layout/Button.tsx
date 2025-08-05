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
          "p-3 rounded-md hover:scale-110 font-bold cursor-pointer relative overflow-hidden transition-all duration-500",
          variant === "primary" &&
            "bg-button-primary-bg hover:bg-button-primary-bg-hover " +
              "text-button-primary-fg hover:text-button-primary-fg-hover ",
          variant === "secondary" &&
            "bg-button-secondary-bg text-button-secondary-fg " +
              "hover:text-button-secondary-fg-hover hover:bg-button-secondary-bg-hover ",
          variant === "skeleton" &&
            "border border-button-skeleton-fg bg-button-skeleton-bg text-button-skeleton-fg " +
              "hover:bg-button-skeleton-bg-hover hover:text-button-skeleton-fg-hover"
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
