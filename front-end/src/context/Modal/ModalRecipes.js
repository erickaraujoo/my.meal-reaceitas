import React, { createContext, useContext , useState } from "react";

const ModalRecipesContext = createContext();

export default function ModalRecipesProvider({ children }) {
  const [onScreen, setOnScreen] = useState(false);

  return (
    <ModalRecipesContext.Provider value={{ onScreen, setOnScreen }}>
      {children}
    </ModalRecipesContext.Provider>
  );
}

export function useDisplay() {
  const context = useContext(ModalRecipesContext);
  const { onScreen, setOnScreen } = context;
  return { onScreen, setOnScreen }
};