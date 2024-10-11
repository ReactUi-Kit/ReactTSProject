import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

/**
 * @jest-environment jsdom
 */
describe("Input Component", () => {
  test("renders an input component with a label", () => {
    const inputProps = {
      label: "Input",
      type: "text",
      placeholder: "labelInput",
    };

    render(<Input {...inputProps} />);

    // Test that the label exists
    const labelElement = screen.getByText(inputProps.label);
    expect(labelElement).toBeInTheDocument();

    // Test that the input exists
    const inputElement = screen.getByPlaceholderText(inputProps.placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders an input component without a label", () => {
    const inputProps = {
      type: "text",
      placeholder: "labelInput",
    };

    render(<Input {...inputProps} />);

    // Test that the input exists
    const inputElement = screen.getByPlaceholderText(inputProps.placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders a password input with a toggle button", () => {
    const inputProps = {
      label: "Password",
      type: "password",
      placeholder: "Enter password",
    };

    render(<Input {...inputProps} />);

    // Test that the input exists
    const inputElement = screen.getByPlaceholderText(inputProps.placeholder);
    expect(inputElement).toBeInTheDocument();

    // Test that the toggle button is rendered
    const toggleButton = screen.getByRole("button"); // Assuming the button has the correct role
    expect(toggleButton).toBeInTheDocument();

    // Test toggling the password visibility
    fireEvent.click(toggleButton); // Click to show password
    expect(inputElement).toHaveAttribute("type", "text"); // Ensure input type changes to text
    fireEvent.click(toggleButton); // Click again to hide password
    expect(inputElement).toHaveAttribute("type", "password"); // Ensure input type changes back to password
  });

  test("renders input with min/max attributes for number type", () => {
    const inputProps = {
      type: "number",
      minLength: 1,
      maxLength: 10,
      placeholder: "Enter a number",
    };

    render(<Input {...inputProps} />);

    // Test that the input has the correct min and max attributes
    const inputElement = screen.getByPlaceholderText(inputProps.placeholder);
    expect(inputElement).toHaveAttribute(
      "min",
      inputProps.minLength.toString()
    );
    expect(inputElement).toHaveAttribute(
      "max",
      inputProps.maxLength.toString()
    );
  });
});
