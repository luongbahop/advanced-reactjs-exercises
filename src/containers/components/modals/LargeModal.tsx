import React, { useState } from "react";
import Modal from "../../../components/modal";

import img from "../../../assets/images/img.png";

const LargeModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="modal-example">
      <button onClick={() => setOpen(true)}>Large Modal</button>
      <Modal
        open={open}
        title="Large Modal"
        onOk={handleOk}
        width="800px"
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <img
          src={img}
          alt="placeholder"
          style={{ width: "500px", margin: "auto", display: "block" }}
        />
      </Modal>
    </div>
  );
};

export default LargeModal;
