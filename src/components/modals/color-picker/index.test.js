import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Modal from ".";
import { RecentColorsProvider } from "../../../state/recent-colors-context";

describe("Modal", () => {
  it("renders the modal", () => {
    const { getByTestId } = render(
      <RecentColorsProvider initColors={["#dde1e6"]}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={jest.fn()}
          showModal
        />
      </RecentColorsProvider>
    );
    const modal = getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("displays the color circle picker", () => {
    const { getByTitle } = render(
      <RecentColorsProvider initColors={["#dde1e6"]}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={jest.fn()}
          showModal
        />
      </RecentColorsProvider>
    );
    const colorCircle = getByTitle("#dde1e6");
    expect(colorCircle).toBeInTheDocument();
  });

  it("hides the modal", () => {
    const { queryByTestId } = render(
      <RecentColorsProvider initColors={["#dde1e6"]}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={jest.fn()}
        />
      </RecentColorsProvider>
    );
    const modal = queryByTestId("modal");
    expect(modal).not.toBeInTheDocument();
  });

  it("calls the close modal function on icon click", () => {
    const closeModal = jest.fn();
    const { getByLabelText } = render(
      <RecentColorsProvider initColors={["#dde1e6"]}>
        <Modal
          data-testid="modal"
          closeModal={closeModal}
          onAddColor={jest.fn()}
          showModal
        />
      </RecentColorsProvider>
    );
    const closeButton = getByLabelText("Close modal");
    fireEvent.click(closeButton);
    expect(closeModal).toBeCalledTimes(1);
  });

  it("calls the add color function on color selection", () => {
    const addColor = jest.fn();
    const { getByLabelText, getByTitle } = render(
      <RecentColorsProvider initColors={["#dde1e6"]}>
        <Modal
          data-testid="modal"
          closeModal={jest.fn()}
          onAddColor={addColor}
          showModal
        />
      </RecentColorsProvider>
    );
    const colorCircle = getByTitle("#dde1e6");
    fireEvent.click(colorCircle);
    const addColorButton = getByLabelText("Add color");
    fireEvent.click(addColorButton);
    expect(addColor).toBeCalledTimes(1);
    expect(addColor).toBeCalledWith("#dde1e6");
  });
});
