import PropTypes from "prop-types";
import React from "react";
import { useTheme } from "styled-components";
import { InvisibleButton } from "../../buttons/invisible";
import { Icon, IconWrapper } from "../../icon";
import ColorPickerModal from "../../modals/color-picker";
import useModalState from "../../../state/modal-hook";

const AddButton = ({ initColor, onAddColor }) => {
  const { closeModal, openModal, showModal } = useModalState();
  const { colors } = useTheme();

  return (
    <>
      <IconWrapper
        as={InvisibleButton}
        aria-label="Add a color swatch"
        color={colors.minGray}
        hoverColor={colors.link}
        size="large"
        onClick={openModal}
      >
        <Icon aria-hidden="true" icon="fa-plus-circle" type="solid" />
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
