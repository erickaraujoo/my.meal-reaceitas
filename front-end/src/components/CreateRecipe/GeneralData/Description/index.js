import React, { useState, useMemo } from "react";

import { useDescription } from "./../../../../context/Recipes/Create";

export default function Description() {
  // const [description, setDescription] = useState("");
  const { description, setDescription } = useDescription();
  const handleDescription = (value) => setDescription(value);

  return (
    <textarea
      placeholder="Digite uma descrição"
      value={description}
      onChange={(e) => handleDescription(e.target.value)}
    ></textarea>
  );
}
