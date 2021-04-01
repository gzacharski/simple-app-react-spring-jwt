import { screen, render } from "@testing-library/react";
import UserHome from "./UserHome";

describe("Private Page should", () => {
  test("render without crashing", () => {
    render(<UserHome />);
  });

  test("contain proper text", () => {
    render(<UserHome />);
    const text = screen.getByText(/private page/);
    expect(text).toBeInTheDocument();
  });
});
