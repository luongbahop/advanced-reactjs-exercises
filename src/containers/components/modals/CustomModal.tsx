import React, { useState } from "react";
import Modal from "../../../components/modal";

const CustomModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="modal-example">
      <button onClick={() => setOpen(true)}>Open Custom Modal</button>
      <Modal
        open={open}
        header={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Custom Header Modal </h2>
            <button onClick={handleCancel}>X</button>
          </div>
        }
        footer={() => <div>Custom Footer</div>}
        onOk={handleOk}
        onCancel={handleCancel}
        customButtons={[
          {
            label: "Button 1",
            className: "custom-btn",
            onClick: () => {
              console.log("Custom Button 1 clicked");
            },
          },
          {
            label: "Button 2",
            className: "custom-btn",
            onClick: () => {
              console.log("Custom Button 2 clicked");
            },
          },
        ]}
      >
        <p>Custom Header Modal...</p>
        <p>Custom Footer Modal...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default CustomModal;
