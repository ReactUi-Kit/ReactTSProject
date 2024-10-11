import styled from "styled-components";

const Checkbox = styled.div<{ textSize: string, textColor: string, width: string }>`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.textSize};

  width: ${(props)=> props.width};
`;

export { Checkbox }
