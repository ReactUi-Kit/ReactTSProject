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

const Item = styled.div<{ textSize: string }>`
  padding: 10px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: ${(props) => props.textSize};
  marginRight: '15px',
`;

const Link = styled.a<{ textColor: string }>`
  text-decoration: none;
  color: ${(props) => props.textColor};
  font-weight: bold;
`;