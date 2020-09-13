import styled from "styled-components";

export const ColorSwatch = styled.div`
  background-color: ${({ colorString }) => colorString};
  height: 8rem;
`;

export const StyledCard = styled.div`
  display: inline-block;
  min-width: 15rem;
`;

export const StyledInfo = styled.div`
  font-family: monospace;
  font-size: 0.875rem;
`;

export const StyledInfoItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledName = styled.div`
  font-weight: bold;
`;
