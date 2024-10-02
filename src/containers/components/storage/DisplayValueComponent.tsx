import React from "react";
import { useLocalStorageContext } from "../../../contexts/LocalStorageContext";

const DisplayValueComponent: React.FC = () => {
  const { getItem } = useLocalStorageContext();
  const [storedValue] = getItem<string>("my_key", "");

  if (!storedValue) {
    return null;
  }

  return (
    <div>
      <p>Stored Value: {storedValue}</p>
    </div>
  );
};

export default DisplayValueComponent;
