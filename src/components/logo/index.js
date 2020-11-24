import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import logoSvg from "./palette-solid.svg";

const Logo = ({ size = "28px", ...props }) => (
  <StyledImg alt="Color Dashboard" size={size} src={logoSvg} {...props} />
);

export default Logo;

Logo.propTypes = {
  size: PropTypes.string,
};

const StyledImg = styled.img`
  height: ${({ size }) => size};
  width: auto;
`;
