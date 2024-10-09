import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

/**
 * @jest-environment jsdom
 */
test("renders a loader component", () => {
    const loaderProps={
    };
    render(<Loader {...loaderProps} />); 
});
