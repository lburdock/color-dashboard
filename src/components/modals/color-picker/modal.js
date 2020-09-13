import PropTypes from "prop-types";
import React from "react";
import { CirclePicker } from "react-color";
import { useRecentColorsState } from "../../../state/recent-colors-context";
import {
  ModalBody,
  ModalCard,
  ModalFooter,
  StyledChromePicker,
} from "./styles";

const ColorPickerModal = ({
  closeModal,
  initColor = "#5BCFF3",
  onAddColor,
  showModal = false,
  ...props
}) => {
  const recentColors = useRecentColorsState();
  const [color, setColor] = React.useState(initColor);

  const onChangeColor = ({ hex }) => {
    setColor(hex);
  };

  const onAddClick = () => {
    closeModal();
    onAddColor(color);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal is-active" {...props}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        aria-hidden="true"
        className="modal-background"
        onClick={closeModal}
      />
      <ModalCard className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Select a color</p>
          <button
            className="delete"
            aria-label="Close modal"
            onClick={closeModal}
          />
        </header>

        <ModalBody className="modal-card-body">
          <StyledChromePicker
            color={color}
            disableAlpha
            onChangeComplete={onChangeColor}
          />
          {recentColors.length ? (
            <CirclePicker
              className="mt-4"
              circleSpacing={8}
              colors={recentColors}
              onChange={onChangeColor}
              width="220px"
            />
          ) : null}
        </ModalBody>

        <ModalFooter className="modal-card-foot">
          <button
            aria-label="Add color"
            className="button is-link"
            onClick={onAddClick}
          >
            Add color
          </button>
        </ModalFooter>
      </ModalCard>
    </div>
  );
};

export default ColorPickerModal;

ColorPickerModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  initColor: PropTypes.string,
  onAddColor: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
};
