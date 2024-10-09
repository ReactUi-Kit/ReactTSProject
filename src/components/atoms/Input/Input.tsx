import { InputProps } from "./Input.props";
import * as Style from "./Input.style";
export default function Button(props: InputProps) {
  const { label, labelClassName, containerClassName, ...inputProps } = props;

  return (
    <Style.InputContainer className={containerClassName}>
      {label && (
        <Style.Label htmlFor={props.name} className={labelClassName}>
          {label}
        </Style.Label>
      )}
      <Style.Input {...inputProps} />
    </Style.InputContainer>
  );
}
