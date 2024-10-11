import { ButtonProps } from "./Button.props";
import { StyledButton } from "./Button.style";

/**
 * Button renders a button element with optional icons.
 *
 * @param {string} label - The text to display on the button.
 * @param {object} icons - The icons to display on the button.
 * @param {React.ReactNode} icons.left - The icon to display on the left side of the button.
 * @param {React.ReactNode} icons.right - The icon to display on the right side of the button.
 * @param {ButtonVariant} variant - The variant of the button.
 */
export default function Button(props: ButtonProps) {
  const { label, icons, ...buttonProps } = props;

  return (
    <StyledButton {...buttonProps}>
      {icons?.left && <span className="icon-left">{icons.left}</span>}
      {label}
      {icons?.right && <span className="icon-right">{icons.right}</span>}
    </StyledButton>
  );
}
