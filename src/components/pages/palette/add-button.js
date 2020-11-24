import PropTypes from "prop-types";
import React from "react";
import useModalState from "../../../state/modal-hook";
import { InvisibleButton } from "../../buttons/invisible";
import { Icon, IconWrapper } from "../../icon";
import ColorPickerModal from "../../modals/color-picker";

const AddButton = ({ initColor, onAddColor }) => {
  const { closeModal, openModal, showModal } = useModalState();

  return (
    <>
      <IconWrapper
        as={InvisibleButton}
        aria-label="Add a color swatch"
        size="large"
        onClick={openModal}
      >
        <Icon aria-hidden="true" icon="fas fa-plus-circle" />
      </IconWrapper>
      <ColorPickerModal
        closeModal={closeModal}
        initColor={initColor}
        onAddColor={onAddColor}
        showModal={showModal}
      />
    </>
  );
};

export default AddButton;

AddButton.propTypes = {
  initColor: PropTypes.string,
  onAddColor: PropTypes.func.isRequired,
};
