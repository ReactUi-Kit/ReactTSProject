import { InputProps } from "./Input.props";
import * as Style from "./Input.style";
export default function Button(props: InputProps) {
    const defaultPlaceholder = 'placeholderInput';
    return(
        <Style.InputContainer className={props.containerClassName}>
            {props.label &&(
                <Style.Label htmlFor={props.name} className={props.labelClassName}>
                    {props.label}
                </Style.Label>
            )}
            <Style.Input 
                name={props.name}
                type={props.type}
                min={props.min && props.min}
                max={props.max && props.max}
                pattern={props.pattern && props.pattern}
                disabled={props.disabled && props.disabled}
                required={props.required && props.required}
                readOnly={props.readOnly && props.readOnly}
                placeholder={props.placeholder ? props.placeholder : defaultPlaceholder }
                className={props.className && props.className}
            />
        </Style.InputContainer> 
    )
}
