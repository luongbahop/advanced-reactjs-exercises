import React from "react";
import Navbar from "../components/navbar";
import StorageExample from "./components/storage/StorageExample";

const Exercise1: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="content">
        <StorageExample />
      </div>
    </div>
  );
};

export default Exercise1;
