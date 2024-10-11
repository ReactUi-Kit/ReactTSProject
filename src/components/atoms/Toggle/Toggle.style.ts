// src/components/atoms/Toggle/Toggle.style.ts
import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.label`
  margin-left: 10px;
  font-size: 1rem;
  color: #333;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #4caf50;
  }

  &:checked + ${Slider}::before {
    transform: translateX(26px);
  }
`;
