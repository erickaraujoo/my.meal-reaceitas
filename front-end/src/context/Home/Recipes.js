import React, { useState, createContext, useContext } from "react";

const RecipesContext = createContext();

export default function RecipesProvider({ children }) {
  const [currentButton, setCurrentButton] = useState(1);

  return (
    <RecipesContext.Provider value={{ currentButton, setCurrentButton }}>
      {children}
    </RecipesContext.Provider>
  );
}

export function useButton() {
  const context = useContext(RecipesContext);
  const { currentButton, setCurrentButton } = context;
  return { currentButton, setCurrentButton };
}