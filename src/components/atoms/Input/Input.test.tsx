import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

/**
 * @jest-environment jsdom
 */
test("renders a input component with label", () => {
    const inputProps={
        label: "Input",
        type: "text",
        min: 10,
        max: 15,
        disabled:true,
        className:``,
        name:'inputName',
        pattern: '',
        required:false,
        readOnly:false,
        labelClassName:``,
        containerClassName:``,
        placeholder:'labelInput'
    };

    render(<Input {...inputProps} />);

    // Teste que le label existe
    const labelElement = screen.getByText(inputProps.label);
    expect(labelElement).toBeInTheDocument();

    // Teste que le input existe
    const placeholderTest = inputProps.placeholder ? inputProps.placeholder : 'placeholderInput';
    const InputElement = screen.getByPlaceholderText(placeholderTest);
    expect(InputElement).toBeInTheDocument(); 
    
});

test("renders a input component with not label", () => {
    const inputProps={
      type: "text",
      min: 10,
      max: 15,
      disabled:true,
      className:``,
      name:'inputName',
      pattern: '',
      required:false,
      readOnly:false,
      labelClassName:``,
      containerClassName:``,
      placeholder:'labelInput'
    };
  
    render(<Input {...inputProps} />);
  
    // Teste que le input existe
    const placeholderTest = inputProps.placeholder ? inputProps.placeholder : 'placeholderInput';
    const InputElement = screen.getByPlaceholderText(placeholderTest);
    expect(InputElement).toBeInTheDocument(); 
  });