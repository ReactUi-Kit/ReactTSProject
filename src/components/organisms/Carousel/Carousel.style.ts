import styled from "styled-components";

export const CarouselContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  overflow: hidden;
`;

export const CarouselTrack = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ translateX }) => translateX}%) translateZ(0);
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
  &:focus {
    outline: 2px solid blue;
  }
`;

export const PrevButton = styled(Button)`
  left: 10px;
`;

export const NextButton = styled(Button)`
  right: 10px;
`;
