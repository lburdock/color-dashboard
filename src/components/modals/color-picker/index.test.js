import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Modal from ".";
import { ColorProvider } from "../../../state/color-context";

export const INITIAL_STATE = {
  recent: ["#dde1e6"],
  palette: [],
  shade: [],
  accessibility: [],
};

describe("Modal", () => {
  it("renders the modal", () => {
    const { getByTestId } = render(
      <ColorProvider initialState={INITIAL_STATE}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={jest.fn()}
          showModal
        />
      </ColorProvider>
    );
    const modal = getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("displays the color circle picker", () => {
    const { getByTitle } = render(
      <ColorProvider initialState={INITIAL_STATE}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={jest.fn()}
          showModal
        />
      </ColorProvider>
    );
    const colorCircle = getByTitle("#dde1e6");
    expect(colorCircle).toBeInTheDocument();
  });

  it("hides the modal", () => {
    const { queryByTestId } = render(
      <ColorProvider initialState={INITIAL_STATE}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={jest.fn()}
        />
      </ColorProvider>
    );
    const modal = queryByTestId("modal");
    expect(modal).not.toBeInTheDocument();
  });

  it("calls the close modal function on icon click", () => {
    const closeModal = jest.fn();
    const { getByLabelText } = render(
      <ColorProvider initialState={INITIAL_STATE}>
        <Modal
          data-testid="modal"
          closeModal={closeModal}
          onAddColor={jest.fn()}
          showModal
        />
      </ColorProvider>
    );
    const closeButton = getByLabelText("Close modal");
    fireEvent.click(closeButton);
    expect(closeModal).toBeCalledTimes(1);
  });

  it("calls the add color function on color selection", () => {
    const addColor = jest.fn();
    const { getByLabelText, getByTitle } = render(
      <ColorProvider initialState={INITIAL_STATE}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={addColor}
          showModal
        />
      </ColorProvider>
    );
    const colorCircle = getByTitle("#dde1e6");
    fireEvent.click(colorCircle);
    const addColorButton = getByLabelText("Add color");
    fireEvent.click(addColorButton);
    expect(addColor).toBeCalledTimes(1);
    expect(addColor).toBeCalledWith("#dde1e6");
  });
});
