import styled from "styled-components";

const Wrapper = styled.div<{ backgroundColor: string; barSize: string }>`
  display: flex;
  padding: 10px;
  gap: 10px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  align-items: center;
  width: ${(props) => props.barSize};
`;

const Item = styled.div<{  backgroundColor: string; textSize: string }>`
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  font-size: ${(props) => props.textSize};
  gap: 5px;
`;

const CustomLink = styled.a<{ textColor: string }>`
  text-decoration: none;
  color: ${(props) => props.textColor};
  font-weight: bold;
`;



export {
  Wrapper,
  Item,
  CustomLink
}