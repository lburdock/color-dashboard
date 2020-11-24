import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ModalContainer from "../components/modal-container";

/**
 * Renders the basic modal (white box over with a black overlay)
 */
const BasicModal = ({ children, closeModal, ...props }) => {
  return (
    <ModalContainer closeModal={closeModal} {...props}>
      <ModalContent className="modal-content box">{children}</ModalContent>
      <button
        aria-label="Close"
        className="modal-close is-large"
        onClick={closeModal}
      ></button>
    </ModalContainer>
  );
};

export default BasicModal;

BasicModal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
};

const ModalContent = styled.div`
  margin-bottom: 0 !important;
`;
