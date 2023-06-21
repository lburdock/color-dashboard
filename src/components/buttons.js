import styled from "styled-components";

export const InvisibleButton = styled.button`
  all: unset;
  color: ${({ color, theme }) => color || theme.colors.minGraphicalGray};
  cursor: pointer;
  transition: color 300ms ease-out;

  &:hover {
    color: ${({ hoverColor, theme }) => hoverColor || theme.colors.link};
  }
`;

export const SmallActiveButton = styled(InvisibleButton)`
  margin-top: -0.4rem;
  &:active {
    font-size: 90%;
  }
`;
