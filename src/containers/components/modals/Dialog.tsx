import React, { useState } from "react";
import Modal from "../../../components/modal";

const Dialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="modal-example">
      <button onClick={() => setOpen(true)}>Dialog</button>
      <Modal
        open={open}
        title="Dialog Title"
        type="dialog"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Dialog;
