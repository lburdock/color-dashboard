import styled from "styled-components";

export const InvisibleButton = styled.button`
  background: none;
  border: none;
  color: ${({ color, theme }) => color || theme.colors.minGraphicalGray};
  cursor: pointer;
  font: inherit;
  line-height: 1;
  margin: 0;
  padding: 0;
  transition: color 300ms ease-out;

  &:hover {
    color: ${({ hoverColor, theme }) => hoverColor || theme.colors.link};
  }

  &:focus {
    outline: 0;
  }
`;

export const SmallActiveButton = styled(InvisibleButton)`
  &:active {
    font-size: 90%;
  }
`;
