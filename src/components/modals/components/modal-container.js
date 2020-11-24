import PropTypes from "prop-types";
import React from "react";
import HideOverflow from "../components/hide-overflow";

/**
 * Modal container which only renders the component if `showModal` is true
 */
const ModalContainer = ({ children, closeModal, showModal, ...props }) => {
  if (!showModal) {
    return null;
  }

  return (
    <>
      <HideOverflow />
      <div className="modal is-active" {...props}>
        <div
          aria-hidden="true"
          aria-label="Close"
          className="modal-background"
          onClick={closeModal}
          role="button"
          tabIndex="0"
        />
        {children}
      </div>
    </>
  );
};

export default ModalContainer;

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
};
