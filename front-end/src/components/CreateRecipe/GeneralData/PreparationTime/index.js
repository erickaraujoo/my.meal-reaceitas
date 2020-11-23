import React from 'react'

import { usePreparationTime } from "./../../../../context/Recipes/Create";

export default function PreparationTime() {
  const { preparationTime, setPreparationTime } = usePreparationTime();
  const handlePreparationTime = value => setPreparationTime(value);

  return (
    <input 
      type="text"
      value={preparationTime}
      onChange={(e) => handlePreparationTime(e.target.value)}
    />
  );
}