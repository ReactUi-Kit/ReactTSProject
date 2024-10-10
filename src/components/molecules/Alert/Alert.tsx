import { AlertProps } from "./Alert.props";
import * as Style from "./Alert.style";
import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline, IoClose } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { useEffect, useState } from "react";

// Styles pour chaque type d'alerte
const alertStyles = {
  Error: {
    backgroundColor: "#ffdee2",
    color: "#d40d24",
    Icon: <MdErrorOutline />,
  },
  Success: {
    backgroundColor: "#cfffe8",
    color: "#008f40",
    Icon: <FaCheck />,
  },
  Info: {
    backgroundColor: "#d9e9ff",
    color: "#3d00d6",
    Icon: <CiCircleInfo />,
  },
  Warning: {
    backgroundColor: "#fcffc4",
    color: "#ad6110",
    Icon: <IoWarningOutline />,
  },
};

export default function Alert({
  type = "Info",
  label,
  auto = false,
  otherCssWrapper = "",
  otherIcon,
  containerSize = "small",  // Par défaut, la taille est "medium"
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Fermeture automatique après un certain délai si 'auto' est activé
  useEffect(() => {
    if (auto) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);  // Fermeture après 5 secondes
      return () => clearTimeout(timer);
    }
  }, [auto]);

  // Fermeture manuelle via bouton 'close'
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const { backgroundColor, color, Icon } = alertStyles[type];

  return (
    <Style.AlertWrapper
      otherCSS={otherCssWrapper}
      backgroundColor={backgroundColor}
      color={color}
      containerSize={containerSize}  // Prop pour définir la taille du container
    >
      <Style.TypeWrapper>{otherIcon || Icon}</Style.TypeWrapper>
      <Style.TextWrapper>
        <Style.AlertTitle>{type}</Style.AlertTitle>
        <Style.AlertLabel>{label}</Style.AlertLabel>
      </Style.TextWrapper>
      {!auto && (
        <Style.CloseWrapper role="button" onClick={handleClose} aria-label="Close alert">
          <IoClose />
        </Style.CloseWrapper>
      )}
    </Style.AlertWrapper>
  );
}
