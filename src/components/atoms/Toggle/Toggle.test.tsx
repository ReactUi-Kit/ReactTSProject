// src/components/atoms/Toggle/Toggle.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";

test("renders Toggle and checks the onChange functionality", () => {
  const handleChange = jest.fn();
  render(<Toggle label="Test Toggle" checked={false} onChange={handleChange} />);

  // Vérifie que le label est dans le document
  expect(screen.getByLabelText(/Test Toggle/i)).toBeInTheDocument();

  // Simule un clic sur le toggle
  const checkbox = screen.getByLabelText(/Test Toggle/i);
  fireEvent.click(checkbox);

  // Vérifie que la fonction onChange a été appelée
  expect(handleChange).toHaveBeenCalled();
});
