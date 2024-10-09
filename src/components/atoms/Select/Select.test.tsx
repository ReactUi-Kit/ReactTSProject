import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "./Select";

/**
 * @jest-environment jsdom
 */
test("renders a select component with options", () => {
  const label = "Select an option";
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  render(<Select label={label} options={options} />);

  // Teste que le label existe
  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();

  // Teste que les options sont affichées
  options.forEach((option) => {
    const optionElement = screen.getByText(option.label);
    expect(optionElement).toBeInTheDocument();
  });
});
