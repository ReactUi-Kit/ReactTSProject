import React from "react";
import Modal from "./Modal";
import { ModalProvider, useModal } from "./ModalContext";
import { StoryObj } from "@storybook/react/*";
import { ModalProps } from "./Modal.props";
import Button from "../../atoms/Button/Button";

type Story = StoryObj<typeof Modal>;

export default { component: Modal };
export const ModalStory: Story = {
  args: {
    title: "Test Modal",
  },
  render: (args: ModalProps) => {
    return (
      <ModalProvider>
        <ModalProviderWrapper {...args} />
      </ModalProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
};

function ModalProviderWrapper(props: ModalProps) {
  const { toggleModal } = useModal();

  return (
    <div>
      <Button onClick={toggleModal} label="Toggle Modal" />
      <Modal {...props}>
        <p>Modal content</p>
      </Modal>
    </div>
  );
}
