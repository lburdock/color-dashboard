import styled from "styled-components";
import { IconWrapper } from "../icon";

export const TextColorProvider = styled.span`
  color: ${({ color }) => color};
`;

export const LargeTextBig = styled.span`
  font-size: 18pt;
`;

export const LargeTextBold = styled.span`
  font-size: 14pt;
  font-weight: bold;
`;

export const NormalTextBig = styled.span`
  font-size: 17pt;
`;

export const NormalTextBold = styled.span`
  font-size: 13pt;
  font-weight: bold;
`;

export const Tag = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  font-weight: bold;
  min-width: 4rem;
  padding: 0.3rem 0.5rem;
`;

export const DangerTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.danger};
`;

export const SuccessTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.success};
`;

export const NotApplicable = styled.span`
  color: ${({ theme }) => theme.colors.minTextGray};
  font-style: italic;
`;

export const ThreeColumnGrid = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  row-gap: 0.5rem;
`;

export const Grid = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  row-gap: 0.5rem;

  @media (max-width: 660px) {
    grid-template-columns: repeat(3, max-content);

    > :nth-child(4n) {
      display: none;
    }
  }
`;

export const GridHeaderItem = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`;

export const GridItem = styled.div`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`;

export const Example = styled(GridItem)`
  align-items: center;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: inline-flex;
  padding: 0.5rem;
`;

export const Spacer = styled.span`
  margin: 0 0.5rem;

  &:after {
    content: "\\2022";
  }
`;

export const StyledInput = styled.input`
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: none;
  box-sizing: border-box;
  padding: 0.25rem;
`;

export const StyledIconWrapper = styled(IconWrapper)`
  color: ${({ color }) => color};
`;
