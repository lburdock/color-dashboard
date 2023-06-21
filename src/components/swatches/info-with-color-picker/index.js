import PropTypes from "prop-types";
import React from "react";
import useModalState from "../../../state/modal-hook";
import ColorPickerModal from "../../modals/color-picker";
import InfoSwatch from "../info";
import CardButton from "./card-button";

const InfoSwatchWithPicker = ({
  className,
  color,
  name,
  onDelete,
  onUpdate,
}) => {
  const { closeModal, openModal, showModal } = useModalState();

  return (
    <>
      <InfoSwatch className={className} colorString={color} name={name}>
        <footer className="card-footer">
          <CardButton onClick={openModal}>Edit</CardButton>
          {onDelete ? <CardButton onClick={onDelete}>Delete</CardButton> : null}
        </footer>
      </InfoSwatch>
      <ColorPickerModal
        initColor={color}
        closeModal={closeModal}
        onAddColor={onUpdate}
        showModal={showModal}
      />
    </>
  );
};

export default InfoSwatchWithPicker;

InfoSwatchWithPicker.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func.isRequired,
};
