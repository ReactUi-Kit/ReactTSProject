import React, { useState } from "react";
import { ToggleProps } from "./Toggle.props";
import {
  ToggleWrapper,
  ToggleSwitch,
  Slider,
  HiddenCheckbox,
  ToggleLabel,
} from "./Toggle.style";

export default function Toggle({
  label,
  checked = false,
  onChange,
  disabled,
  backgroundColor,
  ...props
}: ToggleProps) {
  // Gère l'état du toggle
  const [isChecked, setIsChecked] = useState(checked);

  // Fonction pour basculer l'état
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e); // Appelle la fonction onChange si elle est passée en prop
    }
  };

  return (
    <ToggleWrapper>
      <ToggleSwitch>
        <HiddenCheckbox
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          color={backgroundColor}
          {...props}
        />
        <Slider />
      </ToggleSwitch>
      <ToggleLabel>{isChecked ? "Activé" : "Désactivé"}</ToggleLabel>
    </ToggleWrapper>
  );
}
