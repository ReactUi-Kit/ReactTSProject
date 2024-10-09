import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";
import { ModalProvider, useModal } from "./ModalContext";

const ModalTestWrapper: React.FC = () => {
  const { toggleModal } = useModal();
  return (
    <div>
      <button onClick={toggleModal} data-testid="open-modal-button">
        Open Modal
      </button>
      <Modal title="Test Modal">
        <p>Modal content</p>
      </Modal>
    </div>
  );
};

describe("Modal Component", () => {
  const renderModal = () => {
    return render(
      <ModalProvider>
        <ModalTestWrapper />
      </ModalProvider>
    );
  };

  test("should open the modal when the open button is clicked", () => {
    renderModal();

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("open-modal-button"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  test("should close the modal when the close button is clicked", () => {
    renderModal();

    fireEvent.click(screen.getByTestId("open-modal-button"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Close modal"));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("should close the modal when the Escape key is pressed", () => {
    renderModal();

    fireEvent.click(screen.getByTestId("open-modal-button"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("should not close the modal when clicking inside the modal", () => {
    renderModal();

    fireEvent.click(screen.getByTestId("open-modal-button"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole("dialog"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
