import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Button from "@/app/components/layout/Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("shows loading text when loadin is true", () => {
    render(<Button loading={true}>Click Me</Button>);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("disables the button when loading", async () => {
    render(<Button loading={true}>Click Me</Button>);
    await expect(screen.getByText("Loading...")).toBeDisabled();
  });

  it("applies the correct variant for variant=sprimary", () => {
    render(<Button variant="primary">Click Me</Button>);

    expect(screen.getByText("Click Me").className).toMatch(
      /bg-button-primary-bg/
    );
  });

  it("applies correct class for variant=secondary", () => {
    render(<Button variant="secondary">A</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/bg-button-secondary-bg/);
  });

  it("applies correct class for variant=skeleton", () => {
    render(<Button variant="skeleton">A</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/border/);
  });

  it("calls onCLick handler when clicked", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click Me</Button>);

    await userEvent.click(screen.getByText("Click Me"));
    expect(onClick).toBeCalled();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click Me</Button>);
    expect(ref.current?.tagName).toBe("BUTTON");
  });
});
