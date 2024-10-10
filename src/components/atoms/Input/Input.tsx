import { InputProps } from "./Input.props";
import * as Style from "./Input.style";

export default function Input(props: InputProps) {
  const {
    label,
    labelClassName,
    containerClassName,
    type = "text", 
    ...inputProps
  } = props;

  const conditionalProps = {
    ...(type === "text" || type === "password" ? { minLength: inputProps.minString, maxLength: inputProps.maxString } : {}),
    ...(type === "number" || type === "range" || type === "date" || type === "time" ? { min: inputProps.minString, max: inputProps.maxString } : {}),
  };

  return (
    <Style.InputContainer className={containerClassName}>
      {label && (
        <Style.Label htmlFor={inputProps.name} className={labelClassName}>
          {label}
        </Style.Label>
      )}
      <Style.Input {...inputProps} type={type} {...conditionalProps} />
    </Style.InputContainer>
  );
}
