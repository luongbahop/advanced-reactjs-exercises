import React, { useState } from "react";
import Modal from "../../../components/modal";

const ConfirmModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="modal-example">
      <button onClick={() => setOpen(true)}>Open Confirmation</button>
      <Modal.Confirm
        open={open}
        title=""
        content={<p>Are you sure you want to proceed?</p>}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ConfirmModal;
