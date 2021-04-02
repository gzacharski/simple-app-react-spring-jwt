import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "src/main/components";

test("LoginForm renders without crashing", () => {
  render(<LoginForm />);
});

describe("Login Form has", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  test("title", () => {
    const title = screen.getByRole("heading");
    expect(title.innerHTML === "Log In").toBeTruthy();
  });

  describe("fields:", () => {
    test("username", () => {
      const username = screen.getByLabelText(/username/i);
      expect(username).toBeInTheDocument();
    });

    test("password", () => {
      const username = screen.getByLabelText(/password/i);
      expect(username).toBeInTheDocument();
    });
  });

  describe("buttons:", () => {
    test("Log In", () => {
      const loginBtn = screen.getByRole("button");
      expect(loginBtn).toBeInTheDocument();
    });

    test("Log In button has proper name", () => {
      const loginBtn = screen.getByRole("button");
      expect(loginBtn.innerHTML.match(/log in/i)).toBeTruthy();
    });
  });
});

describe("Username field changes its value while typing:",()=>{
    test("field has empty value",()=>{
        render(<LoginForm/>);

        const username=screen.getByLabelText(/username/i);
        expect(username.innerHTML.length).toBe(0);
        expect(username.getAttribute("value")==="").toBeTruthy();
    })

    test("type test text",async ()=>{
        render(<LoginForm/>);
        let username=null;
        username=await screen.findByLabelText(/username/i);
        
        userEvent.type(username,"sample text");
        username=await screen.findByLabelText(/username/i);

        expect(username.getAttribute("value")==="sample text").toBeTruthy();
    })
})
