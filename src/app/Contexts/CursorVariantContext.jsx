"use client";
import { createContext, useState } from "react";

export const CursorVariantContext = createContext("default");

const CursorVariantProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <CursorVariantContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorVariantContext.Provider>
  );
};

export default CursorVariantProvider;
