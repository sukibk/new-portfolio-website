import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NonDashboardLayout from "@/app/(non-dashboard)/layout";

// Mocks
vi.mock("@/app/components/intro/Intro", () => ({
  default: ({ turnIntroOff }: { turnIntroOff: (done: boolean) => void }) => (
    <button onClick={() => turnIntroOff(true)}>Mock Intro</button>
  ),
}));

vi.mock("@/app/components/navbar/NavbarLayout", () => ({
  default: () => <div data-testid="navbar">Navbar</div>,
}));

vi.mock("@/app/components/ThemeSwitcher", () => ({
  default: () => <div data-testid="theme-switcher">ThemeSwitcher</div>,
}));

vi.mock("@/app/context/UIContext", async () => {
  const React = await import("react");
  return {
    useUIContext: () => ({
      scrollRef: React.createRef<HTMLDivElement>(),
      isScrolled: false,
      hamburgerOpen: false,
    }),
  };
});

// Tests

describe("NonDashboardLayout", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows Intro initially if LocalStorage is not set", () => {
    render(
      <NonDashboardLayout>
        <div>Page Content</div>
      </NonDashboardLayout>
    );

    expect(screen.getByText("Mock Intro")).toBeInTheDocument();
    expect(screen.queryByText("Page Content")).not.toBeInTheDocument();
    expect(screen.queryByTestId("navbar")).not.toBeInTheDocument();
    expect(screen.queryByTestId("theme-switcher")).not.toBeInTheDocument();
  });

  it("renders child content and UI after skipping into", async () => {
    render(
      <NonDashboardLayout>
        <div> Page Content </div>
      </NonDashboardLayout>
    );

    await userEvent.click(screen.getByText("Mock Intro"));

    await waitFor(() => {
      expect(screen.getByText("Page Content")).toBeInTheDocument();
      expect(screen.getByTestId("navbar")).toBeInTheDocument();
      expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
    });
  });

  it("skips intro and renders content immediately if introCompleted is in localStorage", () => {
    localStorage.setItem("introCompleted", "true");

    render(
      <NonDashboardLayout>
        <div>Page Content</div>
      </NonDashboardLayout>
    );

    expect(screen.getByText("Page Content")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
  });
});
