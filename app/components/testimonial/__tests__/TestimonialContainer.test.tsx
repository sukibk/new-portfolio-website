import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TestimonialsContainer from "../TestimonialContainer";

const setIsScrolling = vi.fn();
const setCurrentIndex = vi.fn();

describe("TestimonialsContainer", () => {
  it("renders without crashing", () => {
    render(
      <TestimonialsContainer
        isScrolling={false}
        setIsScrolling={setIsScrolling}
        currentIndex={0}
        setCurrentIndex={setCurrentIndex}
      />
    );
    expect(true).toBe(true); // Dummy assertion for vitest
  });
});
