import React from "react";
import axios from "axios";
import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegistrationForm } from "src/main/components";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("LoginForm renders without crashing", () => {
  render(<RegistrationForm />);
});

describe("Login Form has", () => {
  beforeEach(() => {
    render(<RegistrationForm />);
  });

  test("title", () => {
    const title = screen.getByRole("heading");
    expect(title.innerHTML === "Sign in").toBeTruthy();
  });

  describe("fields:", () => {
    test("name", () => {
      const name = screen.getByLabelText(/name/);
      expect(name).toBeInTheDocument();
    });

    test("surname", () => {
      const surname = screen.getByLabelText(/surname/i);
      expect(surname).toBeInTheDocument();
    });

    test("password", () => {
      const password = screen.getByLabelText(/password/i);
      expect(password).toBeInTheDocument();
    });

    test("email", () => {
      const email = screen.getByLabelText(/email/i);
      expect(email).toBeInTheDocument();
    });
  });

  describe("buttons:", () => {
    test("Sign In", () => {
      const signInBtn = screen.getByRole("button");
      expect(signInBtn).toBeInTheDocument();
    });

    test("Sign In button has proper name", () => {
      const signInBtn = screen.getByRole("button");
      expect(signInBtn.innerHTML.match(/sign in/i)).toBeTruthy();
    });
  });
});

describe("App send registration request and", () => {
  test("displays registration success message", async () => {
    const promise = Promise.resolve({
      data: { success: "true", id: "user-sample-id" },
    });
    mockedAxios.post.mockImplementationOnce(() => promise);

    render(<RegistrationForm />);
    act(() => userEvent.click(screen.getByRole("button")));

    const callbackMessage = await screen.findByText(
      /użytkownik został zarejestrowany/i
    );
    
    expect(callbackMessage).toBeInTheDocument();
    expect(callbackMessage).toBeVisible();
  });

  test("displays registration failur message", async () => {
    const failure = Promise.resolve({
      data: { success: "false" },
    });
    mockedAxios.post.mockImplementationOnce(() => failure);

    render(<RegistrationForm />);
    act(() => userEvent.click(screen.getByRole("button")));

    const callbackMessage = await screen.findByText(/adres email jest już zajęty/i);

    expect(callbackMessage).toBeInTheDocument();
    expect(callbackMessage).toBeVisible();
  });

  test("displays registration error message", async () => {
    mockedAxios.post.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<RegistrationForm />);
    act(() => userEvent.click(screen.getByRole("button")));

    const callbackMessage = await screen.findByText(
      /wystąpił błąd podczas rejestracji/i
    );
        
    expect(callbackMessage).toBeInTheDocument();
    expect(callbackMessage).toBeVisible();
  });
});
