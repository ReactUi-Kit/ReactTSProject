import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

/**
 * @jest-environment jsdom
 */
test("renders a input component with label", () => {
    const alertProps={
        label:'Testing Labelisation'
    };

    render(<Alert {...alertProps} />);

    
});

test("renders a input component with not label", () => {
    const alertProps={
      label:'Testing Labelisation'
    };
  
    render(<Alert {...alertProps} />);
  
  });