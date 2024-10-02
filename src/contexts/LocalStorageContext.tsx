import React, { createContext, useContext, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface LocalStorageContextProps {
  getItem: <T>(
    key: string,
    initialValue: T
  ) => readonly [T, (value: T | ((val: T) => T)) => void, () => void];
}

const LocalStorageContext = createContext<LocalStorageContextProps | undefined>(
  undefined
);

export const LocalStorageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getItem = <T,>(key: string, initialValue: T) =>
    useLocalStorage<T>(key, initialValue);

  return (
    <LocalStorageContext.Provider value={{ getItem }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorageContext must be used within a LocalStorageProvider"
    );
  }
  return context;
};
