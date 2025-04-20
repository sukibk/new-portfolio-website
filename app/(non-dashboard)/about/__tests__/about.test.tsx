import { render, screen } from "@testing-library/react";

import AboutPage from "@/app/(non-dashboard)/about/Section";

describe("AboutPage", () => {
  it("renders the About Me heading and key element", () => {
    render(<AboutPage />);

    expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument();
    expect(screen.getByText(/process.env/i)).toBeInTheDocument();
    expect(screen.getByText(/into drones/i)).toBeInTheDocument();
    expect(screen.getByText(/full_stack/i)).toBeInTheDocument();
    expect(screen.getByText(/into drones/i)).toBeInTheDocument();
    expect(screen.getByText(/google cloud/i)).toBeInTheDocument();
  });
});
