import styled from "styled-components";

type CardWrapperProps = {
  layout?: "row" | "column"; // Le '?' signifie que layout peut être undefined
};

const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === "row" ? "row" : "column")}; // Valeur par défaut à column
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  margin: 8px 0;
  font-size: 1rem;
`;

const CardActions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
`;

export { CardWrapper, CardImage, CardContent, CardTitle, CardDescription, CardActions };
