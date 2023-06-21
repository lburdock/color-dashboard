import PropTypes from "prop-types";
import React from "react";
import { Icon, IconWrapper } from "../../../components/icon";
import { getRandomHex } from "../../../utils/color/get-random-hex";

const RandomButton = ({ onClick }) => {
  return (
    <button
      className="button is-link is-outlined is-small mt-2"
      onClick={() => onClick(getRandomHex(), true)}
    >
      <IconWrapper size="small">
        <Icon aria-hidden="true" icon="fas fa-redo" />
      </IconWrapper>
      <span>Random color</span>
    </button>
  );
};

export default RandomButton;

RandomButton.propTypes = {
  onClick: PropTypes.func,
};
