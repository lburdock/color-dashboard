import PropTypes from "prop-types";
import React from "react";

const CardButton = ({ children, onClick }) => {
  return (
    <button
      className="button is-white has-text-link card-footer-item"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CardButton;

CardButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
