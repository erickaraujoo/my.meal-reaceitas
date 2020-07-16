import React from "react";

import { useCreate } from "./../../../context/Recipes/Create";

import { Section } from "./styles";

export default function SendRecipe() {
  const {
    setLoading,
    previewImages,
    ingredients,
    preparationTime,
    revenue,
    methodPreparation,
    name,
    description,
  } = useCreate();
  
  const handleSendRecipe = (boolean) => setLoading(boolean);

  return (
    <Section>
      <button
        onClick={() => {
          if (
            previewImages.length &&
            ingredients.length &&
            methodPreparation.length &&
            name &&
            description &&
            preparationTime &&
            revenue
          ) {
            handleSendRecipe(true);
          }
        }}
      >
        <span>Criar nova receita</span>
      </button>
    </Section>
  );
}
