import { IconWrapper } from "../../icon";
import styled from "styled-components";

export const ColorSwatch = styled.div`
  background-color: ${({ colorString }) => colorString};
  height: 8rem;
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
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ hideMobile }) => (hideMobile ? "display: none;" : "")}
  }
`;

export const StyledName = styled.div`
  font-weight: bold;
`;

export const StyledIconWrapper = styled(IconWrapper)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
