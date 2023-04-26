import { render, screen } from "@testing-library/react";

import CustomFormInput from "../../src/components/customFormInput/CustomFormInput";
import {
  loginFormUsernameTestData,
  loginFormPasswordTestData,
} from "./loginFormInputTestData";

describe("CustomFormInput", () => {
  it("renders CustomFormInput main component with Username Input in the LoginForm", () => {
    render(<CustomFormInput {...loginFormUsernameTestData} />);

    screen.getByText("Username");
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText(/Username/)).toBeInTheDocument();
    expect(screen.queryByTestId("username")).toBeDefined();
  });
});

describe("CustomFormInput", () => {
  it("renders CustomFormInput main component with Password Input in the LoginForm", () => {
    render(<CustomFormInput {...loginFormPasswordTestData} />);

    screen.getByText("Password");
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText(/Password/)).toBeInTheDocument();
    expect(screen.queryByTestId("password")).toBeDefined();
  });
});

describe("CustomFormInput", () => {
  it("renders CustomFormInput main component with Label Login in the LoginForm", () => {
    render(<CustomFormInput label="Login" />);

    screen.getByText("Login");
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });
});
