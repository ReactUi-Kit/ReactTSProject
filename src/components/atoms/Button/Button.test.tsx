import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

/**
 * @jest-environment jsdom
 */
test("render a button", () => {
  const label = "Button";

  render(<Button label={label} />);

  // test title
  const titleElement = screen.getByText(label);
  expect(titleElement).toBeInTheDocument();
});
