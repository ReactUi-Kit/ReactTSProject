import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "./Select";

test("composant SELECT avec options", () => {
  const label = "Sélection";
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  render(<Select label={label} options={options} />);

  // Test que le label est rendu
  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();

  // Test que toutes les options sont affichées
  options.forEach((option) => {
    const optionElement = screen.getByText(option.label);
    expect(optionElement).toBeInTheDocument();
  });
});

test("autorise SELECT multiple if 'multiple' === true", () => {
  const label = "Sélection multiple";
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  render(<Select label={label} options={options} multiple />);

  const selectElement = screen.getByLabelText(label) as HTMLSelectElement;

  // Vérifie qu'il s'agit d'un multiple select
  expect(selectElement.multiple).toBe(true);
});

test("SELECT disabled", () => {
  const label = "SELECT désactivé";
  const options = [{ value: "option1", label: "Option 1" }];

  render(<Select label={label} options={options} disabled />);

  const selectElement = screen.getByLabelText(label) as HTMLSelectElement;

  // Test que le select est désactivé
  expect(selectElement.disabled).toBe(true);
});
