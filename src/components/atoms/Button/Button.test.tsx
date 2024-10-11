import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import { ButtonProps, ButtonVariant } from "./Button.props";

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

  it("applies the primary variant background color", () => {
    renderButton({ label: buttonLabel, variant: ButtonVariant.Primary });
    const button = screen.getByText(buttonLabel);
    const style = window.getComputedStyle(button);
    expect(style.backgroundColor).toBe("rgb(0, 86, 179)");
  });

  it("applies the secondary variant background color", () => {
    renderButton({ label: buttonLabel, variant: ButtonVariant.Secondary });
    const button = screen.getByText(buttonLabel);
    const style = window.getComputedStyle(button);
    expect(style.backgroundColor).toBe("rgb(90, 98, 104)");
  });

  it("applies the danger variant background color", () => {
    renderButton({ label: buttonLabel, variant: ButtonVariant.Danger });
    const button = screen.getByText(buttonLabel);
    const style = window.getComputedStyle(button);
    expect(style.backgroundColor).toBe("rgb(200, 35, 51)");
  });
});
