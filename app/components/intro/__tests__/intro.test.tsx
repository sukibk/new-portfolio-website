import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, vi } from "vitest";

import Intro from "../Intro";

// Create a mock for the useDelayShowElement hook that we can control
let mockUseDelayShowElement = false;
vi.mock("@/app/hooks/useDelayShowElement", () => ({
  default: () => mockUseDelayShowElement,
}));

// Mock dependent components
vi.mock("@/app/components/intro/IntroText", () => ({
  default: () => <div>Intro Text</div>,
}));

vi.mock("@/app/components/layout/Button", () => ({
  default: ({ children, onClick, variant }: any) => (
    <button data-variant={variant} onClick={onClick}>
      {children}
    </button>
  ),
}));

describe("Intro", () => {
  beforeEach(() => {
    mockUseDelayShowElement = false;
    vi.clearAllMocks;
  });

  it("renders the SKIP Intro button initially", () => {
    render(<Intro />);

    const skipButton = screen.getByText("SKIP INTRO");
    expect(skipButton).toBeInTheDocument();
  });

  // it("calls turnIntroOff when SKIP INTRO is clicked", async () => {
  //   const mockTurnIntroOff = vi.fn();
  //   render(<Intro />);
  //
  //   const skipButton = screen.getByText("SKIP INTRO");
  //   await userEvent.click(skipButton);
  //
  //   expect(mockTurnIntroOff).toHaveBeenCalledWith(true);
  // });

  it("shows ENTER WEBSITE button after delay", () => {
    mockUseDelayShowElement = true;

    render(<Intro />);

    const buttonElement = screen.getAllByText(/ENTER WEBSITE/i)[0];
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the IntroText component", () => {
    render(<Intro />);

    const introText = screen.getByText("Intro Text");
    expect(introText).toBeInTheDocument();
  });

  it("renders button with correct variant", async () => {
    render(<Intro />);

    const button = screen.getByText("SKIP INTRO");
    await expect(button.closest("button")).toHaveAttribute(
      "data-variant",
      "skeleton"
    );
  });

  // it("calls turnIntroOff when ENTER WEBSITE button is clicked", async () => {
  //   mockUseDelayShowElement = true;
  //   const mockTurnIntroOff = vi.fn();
  //
  //   render(<Intro/>);
  //
  //   const enterButton = screen.getByRole("button", { name: /ENTER WEBSITE/i });
  //   await userEvent.click(enterButton);
  //
  //   expect(mockTurnIntroOff).toHaveBeenCalledWith(true);
  // });

  it("renders with proper animation classes", async () => {
    render(<Intro />);

    // Check for responsive classes
    const conatiner = screen.getByText("Intro Text").parentElement;
    await expect(conatiner).toHaveClass("flex");
    await expect(conatiner).toHaveClass("flex-col");
    await expect(conatiner).toHaveClass("md:justify-center");
  });

  // it("auto-completes intro after loading animation completes", () => {
  //   // Set up to show ENTER WEBSITE button
  //   mockUseDelayShowElement = true;
  //   const mockTurnIntroOff = vi.fn();
  //
  //   render(<Intro />);
  //
  //   expect(mockTurnIntroOff).not.toHaveBeenCalled();
  //
  //   const enterButton = screen.getByRole("button", { name: /ENTER WEBSITE/i });
  //   enterButton.click();
  //
  //   expect(mockTurnIntroOff).toHaveBeenCalledWith(true);
  // });
});
