import React from 'react'

import { useObservation } from "./../../../../context/Recipes/Create";

export default function Observation() {
  const { observation, setObservation } = useObservation();
  const handleObservation = value => setObservation(value);

  return (
    <textarea
      placeholder="A receita possui alguma observação? Digite aqui! (Opcional)"
      value={observation}
      onChange={(e) => handleObservation(e.target.value)}
    ></textarea>
  );
}