import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TestimonialCard from "../TestimonialCard";

describe("TestimonialCard", () => {
  it("renders name, text, and company", () => {
    render(
      <TestimonialCard name="Jane Doe" text="Amazing!" company="OpenAI" />
    );
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
    expect(screen.getByText(/Amazing!/)).toBeInTheDocument();
    expect(screen.getByText(/OpenAI/)).toBeInTheDocument();
  });
});
