import PropTypes from "prop-types";
import React from "react";
import ModalContainer from "../modal-container";

/**
 * Renders the basic modal (white box over with a black overlay)
 */
const BasicModal = ({ children, closeModal, ...props }) => {
  return (
    <ModalContainer closeModal={closeModal} {...props}>
      <div className="modal-content box mb-0">{children}</div>
      <button
        aria-label="Close"
        className="modal-close is-large"
        onClick={closeModal}
      />
    </ModalContainer>
  );
};

export default BasicModal;

BasicModal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
};
