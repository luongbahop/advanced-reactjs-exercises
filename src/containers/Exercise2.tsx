import React from "react";
import Navbar from "../components/navbar";

import BasicModal from "./components/modals/BasicModal";
import CustomModal from "./components/modals/CustomModal";
import Dialog from "./components/modals/Dialog";
import LargeModal from "./components/modals/LargeModal";
import ConfirmModal from "./components/modals/ConfirmModal";

const Exercise2: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="content">
        <h3>Modal Examples</h3>
        <div className="examples">
          <BasicModal />
          <LargeModal />
          <CustomModal />
          <Dialog />
          <ConfirmModal />
        </div>
      </div>
    </div>
  );
};

export default Exercise2;
