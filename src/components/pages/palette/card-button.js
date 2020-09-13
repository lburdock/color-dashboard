import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const CardButton = ({ children, onClick }) => {
  return (
    <StyledButton
      className="button is-text has-text-link card-footer-item"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default CardButton;

CardButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledButton = styled.button`
  text-decoration: none !important;
`;
