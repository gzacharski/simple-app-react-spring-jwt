import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
    
  test("renders without crashing", () => {
    render(<Home />);
  });

  test("has welcome page", () => {
    render(<Home />);
    const welcomeText = screen.getByText(/home page/i);
    expect(welcomeText).toBeInTheDocument();
  });
});
