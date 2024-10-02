import React from "react";
import SetValueComponent from "./SetValueComponent";
import DisplayValueComponent from "./DisplayValueComponent";

const StorageExample: React.FC = () => {
  return (
    <div>
      <h4>LocalStorage Handler Example</h4>
      <SetValueComponent />
      <DisplayValueComponent />
    </div>
  );
};

export default StorageExample;
