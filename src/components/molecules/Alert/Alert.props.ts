export type AlertProps = {
  type?: "Error" | "Info" | "Success" | "Warning";
  label: string;
  auto?: boolean;  // Fermeture automatique
  otherCssWrapper?: string;  // Custom CSS pour le wrapper
  otherIcon?: JSX.Element;  // Icône personnalisée
  containerSize?: "small" | "medium" | "large";  // Taille du conteneur
};
