import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import { ButtonProps } from "./Button.props";

describe("Button component", () => {
  const buttonLabel = "Click Me";
  const leftIcon = <span>LeftIcon</span>;
  const rightIcon = <span>RightIcon</span>;

  const renderButton = (props: ButtonProps) => render(<Button {...props} />);

  it("renders the button label", () => {
    renderButton({ label: buttonLabel });
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });

  it("renders the left icon if provided", () => {
    renderButton({ label: buttonLabel, icons: { left: leftIcon } });
    expect(screen.getByText("LeftIcon")).toBeInTheDocument();
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });

  it("renders the right icon if provided", () => {
    renderButton({ label: buttonLabel, icons: { right: rightIcon } });
    expect(screen.getByText("RightIcon")).toBeInTheDocument();
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });

  it("renders both left and right icons if provided", () => {
    renderButton({
      label: buttonLabel,
      icons: { left: leftIcon, right: rightIcon },
    });
    expect(screen.getByText("LeftIcon")).toBeInTheDocument();
    expect(screen.getByText("RightIcon")).toBeInTheDocument();
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });
});
