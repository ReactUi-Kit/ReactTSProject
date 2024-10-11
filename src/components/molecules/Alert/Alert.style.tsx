import styled from "styled-components";

// Composant pour définir différentes tailles du conteneur
const sizes = {
  small: "300px",
  medium: "500px",
  large: "800px",
};

// Ajout du gap et de la largeur configurée par `containerSize`
const AlertWrapper = styled.div<{ otherCSS?: string; backgroundColor: string; color: string; containerSize?: "small" | "medium" | "large"; }>`
  ${({ otherCSS }) => otherCSS && otherCSS};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  gap: 15px;  // Espace entre les éléments principaux
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  position: relative;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  width: ${({ containerSize }) => (containerSize ? sizes[containerSize] : sizes.medium)};
`;

// Espacement entre l'icône du type et le reste
const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 10px;  
`;

// Zone de texte avec un petit gap
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;  // Espace entre le titre et le label
`;
const AlertLabel = styled.span`
  font-size: 14px;
`;

const AlertTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;
// Positionnement du bouton de fermeture à droite avec un espace entre
const CloseWrapper = styled.div`
  cursor: pointer;
  color: #6a7080;
  font-size: 18px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);  // Centrer verticalement
  margin-left: 15px;  // Espace à gauche du bouton de fermeture
  
  transition: color 0.3s ease;
  
  &:hover {
    color: #000;
  }
`;

export { AlertLabel, AlertTitle, AlertWrapper, TypeWrapper, TextWrapper, CloseWrapper };
