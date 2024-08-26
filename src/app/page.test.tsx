import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page", () => {
  it("should render the Page", () => {
    render(<Page />);

    expect(
      screen.getByRole("heading", { level: 1, name: /hello!/i }),
    ).toBeInTheDocument();
  });
});
