import React from "react";
import Navbar from "../components/navbar";
import BasicSelect from "./components/selects/BasicSelect";
import TwoSelect from "./components/selects/TwoSelect";
import UserSelect from "./components/selects/UserSelect";

const Exercise3: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="content">
        <h3>Auto Filter Dropdown Examples</h3>
        <div>
          <BasicSelect />
          <TwoSelect />
          <UserSelect />
        </div>
      </div>
    </div>
  );
};

export default Exercise3;
