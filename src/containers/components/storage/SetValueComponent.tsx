import React, { useState } from "react";
import { useLocalStorageContext } from "../../../contexts/LocalStorageContext";

const SetValueComponent: React.FC = () => {
  const { getItem } = useLocalStorageContext();
  const [storedValue, setValue, removeValue] = getItem<string>("my_key", "");
  const [inputValue, setInputValue] = useState(storedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSetValue = () => {
    setValue(inputValue);
  };
  const handleRemove = () => {
    removeValue();
    setInputValue("");
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{ marginRight: "5px" }}
      />
      <button
        className="ok-btn"
        onClick={handleSetValue}
        style={{ marginRight: "5px" }}
      >
        Set Value
      </button>
      <button
        className="cancel-btn"
        style={{ marginRight: "5px" }}
        onClick={handleRemove}
      >
        Remove Value
      </button>
    </div>
  );
};

export default SetValueComponent;
