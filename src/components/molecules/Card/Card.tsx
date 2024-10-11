import { CardProps } from "./Card.props";
import * as Style from "./Card.style";

export default function Card({
  layout = "column",
  children,
  ...props
}: CardProps) {
  return (
    <Style.CardWrapper layout={layout} style={props.style}>
      {props.imageUrl && (
        <Style.CardImage src={props.imageUrl} alt={props.imageAlt} />
      )}
      <Style.CardContent>
        {props.title && <Style.CardTitle>{props.title}</Style.CardTitle>}
        {props.description && (
          <Style.CardDescription>{props.description}</Style.CardDescription>
        )}
        {props.actions && (
          <Style.CardActions>{props.actions}</Style.CardActions>
        )}
        {children}
      </Style.CardContent>
    </Style.CardWrapper>
  );
}
