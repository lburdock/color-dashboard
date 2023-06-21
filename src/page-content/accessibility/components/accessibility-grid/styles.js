import styled from "styled-components";

export const CustomColor = styled.span`
  color: ${({ color }) => color};
`;

export const CustomFontSize = styled.span`
  font-size: ${({ fontSize }) => fontSize};
`;

const Tag = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  font-weight: bold;
  min-width: 4rem;
  padding: 0.3rem 0.5rem;
`;

export const DangerTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.danger};
`;

export const WarningTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.minTextGray};
`;

export const SuccessTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.success};
`;

export const NotApplicable = styled.span`
  color: ${({ theme }) => theme.colors.minTextGray};
  font-style: italic;
`;

const CommonGrid = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: grid;
  row-gap: 0.5rem;
`;

export const ThreeColumnGrid = styled(CommonGrid)`
  grid-template-columns: repeat(3, max-content);
`;

export const Grid = styled(CommonGrid)`
  grid-template-columns: repeat(4, max-content);

  @media (max-width: 660px) {
    grid-template-columns: repeat(3, max-content);

    > :nth-child(4n) {
      display: none;
    }
  }
`;

export const GridHeaderItem = styled.div`
  font-size: 0.8rem;
`;

export const GridHeaderSub = styled.div`
  margin-top: -0.25rem;
`;

export const Example = styled.div`
  align-items: center;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: inline-flex;
  padding: 0.5rem;
`;

export const StyledInput = styled.input`
  all: unset;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
`;
