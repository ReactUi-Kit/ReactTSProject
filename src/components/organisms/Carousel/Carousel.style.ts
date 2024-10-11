import styled from "styled-components";

export const CarouselContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  overflow: hidden;
  cursor: ${({ fullWidth }) => (fullWidth ? "grab" : "default")};
`;

export const CarouselTrack = styled.div<{
  translateX: number;
  freeMode?: boolean;
  transitioning?: boolean;
  dragging?: boolean;
}>`
  display: flex;
  transform: translateX(${({ translateX }) => translateX}%);
  transition: ${({ freeMode, dragging, transitioning }) =>
    freeMode
      ? dragging
        ? "none"
        : "transform 0.2s ease-out" // Smooth transition when not dragging in free mode
      : transitioning
      ? "transform 0.5s ease-in-out" // Regular transition for loop
      : "none"}; // Disable transition during "jump" in loop mode

  ${({ freeMode }) =>
    freeMode &&
    `
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  `};
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

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PaginationDot = styled.button<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "black" : "lightgray")};
  border: none;
  cursor: pointer;
`;
