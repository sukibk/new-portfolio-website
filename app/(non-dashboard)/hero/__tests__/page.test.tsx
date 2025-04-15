import { render, screen } from "@testing-library/react";
import HeroPage from "@/app/(non-dashboard)/hero/Section";

describe("Hero Page", () => {
  it("renders core content", async () => {
    render(<HeroPage />);

    expect(screen.getByText("HELLO WORLD!")).toBeInTheDocument();
    expect(screen.getByText("Marko Sudar")).toBeInTheDocument();
    expect(screen.getByText(/Sof4war3 Eng1n33r/)).toBeInTheDocument();
    expect(screen.getByText("US Permanent Resident")).toBeInTheDocument();
    expect(screen.getByText("just-a-chill-guy.jpg")).toBeInTheDocument();

    const image = await screen.findByAltText("Marko Sudar");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("marko_sudar")
    );
  });
});
