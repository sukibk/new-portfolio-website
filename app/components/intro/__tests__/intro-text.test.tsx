import { render } from "@testing-library/react";

import IntroText from "../IntroText";

describe("IntroText", () => {
  it("renders without crashing", () => {
    const { container } = render(<IntroText />);
    expect(container).toMatchSnapshot();
  });
});
