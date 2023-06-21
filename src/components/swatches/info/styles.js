import styled from "styled-components";

export const ColorSwatch = styled.div`
  background-color: ${({ colorString }) => colorString};
  height: 6.5rem;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

export const StyledCard = styled.div`
  display: inline-block;
  min-width: 15rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 9rem;
  }
`;

export const StyledInfo = styled.div`
  font-family: monospace;
  font-size: 0.875rem;
`;

export const StyledInfoItem = styled.div`
  width: 100%;
`;
