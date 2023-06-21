import PropTypes from "prop-types";
import React from "react";
import { CirclePicker, ChromePicker } from "react-color";
import styled from "styled-components";
import { useColorState, FALLBACK_COLOR } from "../../../state/color-context";
import ModalContainer from "../modal-container";

/**
 * Modal that displays a color picker and recently used colors
 */
const ColorPickerModal = ({ closeModal, initColor, onAddColor, ...props }) => {
  const { recent } = useColorState();
  const [color, setColor] = React.useState(initColor || FALLBACK_COLOR);

  const onChangeColor = ({ hex }) => {
    setColor(hex);
  };

  const onAddClick = () => {
    closeModal();
    onAddColor(color);
  };

  return (
    <ModalContainer closeModal={closeModal} {...props}>
      <ModalCard className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Select a color</p>
          <button
            className="delete"
            aria-label="Close modal"
            onClick={closeModal}
          />
        </header>

        <div className="modal-card-body is-flex is-flex-direction-column is-align-items-center">
          <StyledChromePicker
            color={color}
            disableAlpha
            onChangeComplete={onChangeColor}
          />
          {recent.length ? (
            <CirclePicker
              className="mt-4"
              circleSpacing={8}
              colors={recent}
              onChange={onChangeColor}
              width="220px"
            />
          ) : null}
        </div>

        <footer className="modal-card-foot is-justify-content-center">
          <button
            aria-label="Add color"
            className="button is-link"
            onClick={onAddClick}
          >
            Add color
          </button>
        </footer>
      </ModalCard>
    </ModalContainer>
  );
};

export default ColorPickerModal;

ColorPickerModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  initColor: PropTypes.string,
  onAddColor: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
};

export const ModalCard = styled.div`
  width: auto;
`;

export const StyledChromePicker = styled(ChromePicker)`
  border: 1px solid #ddd;
  box-shadow: none !important;
`;
