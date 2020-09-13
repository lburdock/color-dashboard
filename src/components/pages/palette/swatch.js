import PropTypes from "prop-types";
import React from "react";
import useModalState from "../../../state/modal-hook";
import ColorPickerModal from "../../modals/color-picker";
import InfoSwatch from "../../swatches/info";
import CardButton from "./card-button";

const Swatch = ({ initColor, onDelete, onUpdate }) => {
  const [color, setColor] = React.useState(initColor);
  const { closeModal, openModal, showModal } = useModalState();

  const onAddColor = color => {
    setColor(color);
    onUpdate(color);
  };

  return (
    <>
      <InfoSwatch className="mr-3 mb-3" colorString={color}>
        <footer className="card-footer">
          <CardButton onClick={openModal}>Edit</CardButton>
          <CardButton onClick={onDelete}>Delete</CardButton>
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

export default Swatch;

Swatch.propTypes = {
  initColor: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
