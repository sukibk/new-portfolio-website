import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TestimonialsTitle from "../TestimonialsTitle";

describe("TestimonialsTitle", () => {
  it("renders the testimonial title", () => {
    render(<TestimonialsTitle />);
    expect(screen.getByText(/myTestimonials.com/)).toBeInTheDocument();
  });
});
