import React, { useEffect, useRef } from "react";
import { CloseButton, ModalContainer, Overlay } from "./Modal.style";
import { useModal } from "./ModalContext";
import { ModalProps } from "./Modal.props";

/**
 * Modal renders a modal with a title, children, and a close button.
 *
 * @param {string} title - The title of the modal.
 */
export default function Modal(props: ModalProps) {
  const { title, children } = props;
  const { isModalOpen, toggleModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, toggleModal]);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      toggleModal();
    }
  };

  return (
    <Overlay
      isOpen={isModalOpen}
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      data-testid="modal-overlay"
    >
      <ModalContainer ref={modalRef}>
        <CloseButton onClick={toggleModal} aria-label="Close modal">
          &times;
        </CloseButton>
        <h2 id="modal-title">{title}</h2>
        <div>{children}</div>
      </ModalContainer>
    </Overlay>
  );
}
