import styled, { keyframes } from 'styled-components';
import { LoaderProps } from "./Loader.props";

// Animation de rotation pour le spinner
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component pour le spinner avec props typées
const Spinner = styled.div<LoaderProps>`
  border: ${({ size }) => (size ? size / 10 : 12)}px solid ${({ secondaryColor }) => secondaryColor || '#f3f3f3'};
  border-top: ${({ size }) => (size ? size / 10 : 12)}px solid ${({ primaryColor }) => primaryColor || '#3498db'};
  border-radius: 50%;
  width: ${({ size }) => size || 120}px;
  height: ${({ size }) => size || 120}px;
  animation: ${spinAnimation} ${({ speed }) => speed || 2}s linear infinite;
`;

// Typage des props pour la barre de progression


// Styled component pour la barre de progression
const ProgressBarWrapper = styled.div<LoaderProps>`
  width: 100%;
  background-color: ${({ secondaryColor }) => secondaryColor || '#f3f3f3'};
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBar = styled.div<LoaderProps>`
  width: ${({ progress }) => progress || 0}%;
  height: ${({ size }) => size || 20}px;
  background-color: ${({ primaryColor }) => primaryColor || '#3498db'};
  transition: width 0.5s ease;
`;
export{
    ProgressBar,
    Spinner,
    ProgressBarWrapper
}