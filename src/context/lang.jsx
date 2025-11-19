import { createContext, useContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [langData, setLangData] = useState("fr");

  return (
    <LangContext.Provider value={{ langData, setLangData }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  return useContext(LangContext);
};