export type CardProps = {
    title?: string;
    description?: string;
    imageUrl?: string;
    imageAlt?: string;
    actions?: React.ReactNode;
    layout?: "row" | "column"; // Toujours optionnel
    style?: React.CSSProperties;
  };
  