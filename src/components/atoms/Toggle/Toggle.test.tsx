import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle"; // Adjust the import based on your file structure
import { ToggleProps } from "./Toggle.props"; // Adjust as needed

describe("Toggle Component", () => {
  it("renders the toggle with initial state", () => {
    render(<Toggle label="Test Toggle" checked={false} />);

    // Check if the label is rendered
    expect(screen.getByText("Désactivé")).toBeInTheDocument();

    // Check if the checkbox is not checked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("toggles the state when clicked", () => {
    const handleChange = jest.fn();
    render(
      <Toggle label="Test Toggle" checked={false} onChange={handleChange} />
    );

    // Click the toggle
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    // Check if the checkbox is now checked
    expect(checkbox).toBeChecked();
    expect(screen.getByText("Activé")).toBeInTheDocument();

    // Ensure onChange was called
    expect(handleChange).toHaveBeenCalled();
  });

  it("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    render(
      <Toggle
        label="Test Toggle"
        checked={false}
        onChange={handleChange}
        disabled
      />
    );

    // Attempt to click the toggle
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    // Check that the checkbox remains unchecked
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText("Désactivé")).toBeInTheDocument();

    // Ensure onChange was not called
    expect(handleChange).not.toHaveBeenCalled();
  });
});
