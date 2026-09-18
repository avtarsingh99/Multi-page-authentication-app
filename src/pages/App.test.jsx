import { render, screen } from "@testing-library/react";
import Signup from "./Signup";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Signup Page", () => {
  // check if all fields are rendered
  test("check all fields are rendered", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Signup />
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/Username/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Create Account/ }),
    ).toBeInTheDocument();
  });

  // check user signup flow
  test("test user signup flow", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <AuthProvider>
          <Signup />
        </AuthProvider>
      </MemoryRouter>,
    );

    const usernameInput = screen.getByLabelText(/Username/);
    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Password/);

    await user.type(usernameInput, "avtar99");
    await user.type(emailInput, "avtar@gmail.com");
    await user.type(passwordInput, "1234");

    expect(usernameInput).toHaveValue("avtar99");
    expect(emailInput).toHaveValue("avtar@gmail.com");
    expect(passwordInput).toHaveValue("1234");
  });
});

describe("Login Page", () => {
  // check all fields are rendered
  test("check both email and password fields are rendered", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
  });

  // login flow
  test("login flow", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Password/);

    await user.type(emailInput, "avtar@gmail.com");
    await user.type(passwordInput, "1234");

    expect(emailInput).toHaveValue("avtar@gmail.com");
    expect(passwordInput).toHaveValue("1234");
  });
});
