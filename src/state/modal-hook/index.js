import React from "react";

/**
 * Hook to control whether a modal is open or closed
 * @param {boolean} initOpen The initial state of the modal
 */
export const useModalState = (initOpen = false) => {
  const [showModal, setShowModal] = React.useState(initOpen);
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return {
    closeModal,
    openModal,
    showModal,
  };
};

export default useModalState;
