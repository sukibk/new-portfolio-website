import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TestimonialsPage from "../Section";

describe("TestimonialsPage", () => {
  it("renders the testimonials section title", () => {
    render(<TestimonialsPage />);
    // Find the section title h4 and check its text content
    const heading = screen.getByRole("heading", { level: 4 });
    expect(heading.textContent?.replace(/\s/g, "")).toContain(
      "myTestimonials.com"
    );
  });
});
