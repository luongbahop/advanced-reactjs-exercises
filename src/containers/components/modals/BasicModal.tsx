import React, { useState } from "react";
import Modal from "../../../components/modal";

const BasicModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="modal-example">
      <button onClick={() => setOpen(true)}>Open Basic Modal</button>
      <Modal
        open={open}
        title="Basic Modal"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents Basic Modal...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default BasicModal;
