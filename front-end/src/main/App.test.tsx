import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
});

describe("App contains:", () => {
  let links: any = null;

  beforeEach(() => {
    render(<App />);
    links = screen.getAllByRole("link");
  });

  test("Home button", () => {
    const loginBtn = links.filter((link: { innerHTML: string }) =>
      link.innerHTML.match(/home/i)
    );
    expect(loginBtn.length).toBe(1);
    expect(loginBtn[0]).toBeInTheDocument();
  });

  test("Login button", () => {
    const loginBtn = links.filter((link: { innerHTML: string }) =>
      link.innerHTML.match(/log in/i)
    );
    expect(loginBtn.length).toBe(1);
    expect(loginBtn[0]).toBeInTheDocument();
  });

  test("Signup button", () => {
    const loginBtn = links.filter((link: { innerHTML: string }) =>
      link.innerHTML.match(/sign up/i)
    );
    expect(loginBtn.length).toBe(1);
    expect(loginBtn[0]).toBeInTheDocument();
  });
});
