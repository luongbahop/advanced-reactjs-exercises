import React, { useState, useEffect } from "react";
import "./style.css";

interface AutoFilterDropdownProps<T> {
  value: T | null;
  data: T[];
  filterKey: keyof T;
  placeholder?: string;
  valueChange: (selectedValue: T) => void;
}

const AutoFilterDropdown = <T extends {}>({
  value,
  data,
  filterKey,
  placeholder,
  valueChange,
}: AutoFilterDropdownProps<T>) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsDropdownVisible(true);
  };

  const handleOptionClick = (item: T) => {
    setInputValue(String(item[filterKey]));
    valueChange(item);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const lowercasedFilter = inputValue?.toLowerCase();
    if (!lowercasedFilter) {
      setFilteredData([]);
      return;
    }
    const filtered = data.filter((item) =>
      String(item[filterKey]).toLowerCase().includes(lowercasedFilter)
    );
    setFilteredData(filtered);
  }, [inputValue, data, filterKey]);

  useEffect(() => {
    if (value) {
      setInputValue(String(value[filterKey]));
    } else {
      setInputValue("");
    }
  }, [value, filterKey]);

  const highlightMatch = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="auto-filter-dropdown">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder || "Type to filter"}
      />
      {isDropdownVisible && (
        <ul className="dropdown-list">
          {filteredData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(item)}
              className="dropdown-item"
            >
              {highlightMatch(String(item[filterKey]), inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoFilterDropdown;
