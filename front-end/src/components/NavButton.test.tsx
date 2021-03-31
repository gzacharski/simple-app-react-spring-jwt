import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavButton from "./NavButton";

test("renders without crashing", () => {
  render(
    <MemoryRouter>
      <NavButton name="test" to="/test" />
    </MemoryRouter>
  );
});

describe("NavButton", () => {
  let navBtn: any = null;

  beforeEach(() => {
    navBtn = (
      <MemoryRouter>
        <NavButton name="test" to="/test" />
      </MemoryRouter>
    );
    render(navBtn);
  });

  test("is link element", () => {
    const anchor = screen.getByRole("link");
    expect(anchor).toBeInTheDocument();
  });

  test("has proper title", () => {
    const anchor = screen.getByRole("link");
    expect(anchor.innerHTML).toBe("test");
  });

  test("has link inside", () => {
    const anchor = screen.getByRole("link");
    expect(anchor.hasAttribute("href")).toBeTruthy();
  });

  test("has proper link", () => {
    const anchor = screen.getByRole("link");
    expect(anchor.getAttribute("href")).toBe("/test");
  });
});
