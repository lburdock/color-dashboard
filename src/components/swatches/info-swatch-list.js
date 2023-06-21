import React from "react";
import styled from "styled-components";

export const InfoSwatchList = ({ children }) => (
  <FlexGap className="is-flex is-flex-wrap-wrap">{children}</FlexGap>
);

const FlexGap = styled.div`
  gap: 1rem;
`;
