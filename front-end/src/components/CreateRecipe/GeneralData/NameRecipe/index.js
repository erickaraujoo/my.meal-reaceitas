import React from "react";
import { useName } from "./../../../../context/Recipes/Create";

export default function NameRecipe() {
  // const [name, setName] = useState("");

  const { name, setName } = useName();
  const handleName = (value) => setName(value);
  
  return (
    <input
      type="text"
      placeholder="Digite um título..."
      value={name}
      onChange={(e) => handleName(e.target.value)}
    />
  );
}
