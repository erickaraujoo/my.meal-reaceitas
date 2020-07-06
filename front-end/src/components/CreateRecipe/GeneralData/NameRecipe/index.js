import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

import {
  useGeneralData,
  useLoading,
} from "./../../../../context/Recipes/Create";

export default function NameRecipe() {
  const [name, setName] = useState("");

  const { setGeneralData } = useGeneralData();
  const { loading } = useLoading();
  
  const handleName = (value) => setName(value);
  useMemo(
    debounce(() => {
      const handleGeneralData = (name) =>
        setGeneralData(prev => [ ...prev, { name }]);

      if (loading) handleGeneralData(name);
    }, 100),
    [name, loading, setGeneralData]
  );
  return (
    <input
      type="text"
      placeholder="Digite um título..."
      value={name}
      onChange={(e) => handleName(e.target.value)}
    />
  );
}
