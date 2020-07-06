import React, { useState } from "react";

import { useLoading } from "./../../../context/Recipes/Create";

import { Section } from "./styles";

export default function SendRecipe() {
  const { setLoading } = useLoading();

  const handleSendRecipe = (boolean) => setLoading(boolean);

  return (
    <Section>
      <button onClick={() => handleSendRecipe(true)}>
        <span>Criar nova receita</span>
      </button>
    </Section>
  );
}
