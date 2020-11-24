import PropTypes from "prop-types";
import React from "react";
import useModalState from "../../../state/modal-hook";
import ColorPickerModal from "../../modals/color-picker";
import InfoSwatch from "../info";
import CardButton from "./card-button";

const InfoSwatchWithPicker = ({
  className,
  initColor,
  name,
  onDelete,
  onUpdate,
}) => {
  const [color, setColor] = React.useState(initColor);
  const { closeModal, openModal, showModal } = useModalState();

  const onAddColor = color => {
    setColor(color);
    onUpdate(color);
  };

  return (
    <>
      <InfoSwatch className={className} colorString={color} name={name}>
        <footer className="card-footer">
          <CardButton onClick={openModal}>Edit</CardButton>
          {onDelete ? <CardButton onClick={onDelete}>Delete</CardButton> : null}
        </footer>
      </InfoSwatch>
      <ColorPickerModal
        initColor={initColor}
        closeModal={closeModal}
        onAddColor={onAddColor}
        showModal={showModal}
      />
    </>
  );
};

export default InfoSwatchWithPicker;

InfoSwatchWithPicker.propTypes = {
  className: PropTypes.string,
  initColor: PropTypes.string,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func.isRequired,
};
