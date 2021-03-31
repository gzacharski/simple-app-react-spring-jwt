import { screen, render } from "@testing-library/react";
import { PrivatePage } from "./PrivatePage";

describe("Private Page should", () => {
  test("render without crashing", () => {
    render(<PrivatePage />);
  });

  test("contain proper text", () => {
    render(<PrivatePage />);
    const text = screen.getByText(/private page/);
    expect(text).toBeInTheDocument();
  });
});
