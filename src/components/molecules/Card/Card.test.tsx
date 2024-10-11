import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

/**
 * @jest-environment jsdom
 */
test("renders a input component with label", () => {
    const cardProps={
    };

    render(<Card {...cardProps} />);

    
});

test("renders a input component with not label", () => {
    const cardProps={
    };
  
    render(<Card {...cardProps} />);
  
  });