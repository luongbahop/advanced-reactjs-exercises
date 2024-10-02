import React, { useState } from "react";
import { useLocalStorageContext } from "../../../contexts/LocalStorageContext";

const SetValueComponent: React.FC = () => {
  const { handleStorage } = useLocalStorageContext();
  const [storedValue, setValue, removeValue] = handleStorage<string>(
    "my_key",
    ""
  );
  const [inputValue, setInputValue] = useState(storedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSetValue = () => {
    setValue(inputValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSetValue();
    }
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
        onKeyDown={handleKeyPress}
        style={{ marginRight: "5px" }}
        placeholder="Enter value"
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
