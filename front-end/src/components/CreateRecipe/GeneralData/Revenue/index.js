import React from 'react'

import { useRevenue } from "./../../../../context/Recipes/Create";

export default function Revenue() {
  const { revenue, setRevenue } = useRevenue();
  const handleRevenue = value => setRevenue(value);

  return (
    <input 
      type="text"
      value={revenue}
      onChange={(e) => handleRevenue(e.target.value)}
    />
  );
}