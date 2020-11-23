import React, { useState } from "react";

import { useIngredients } from "./../../../context/Recipes/Create";

import { Section } from "./styles";

import ImageClose from "../../../assets/recipes/close.png";

export default function Ingredients() {
  const [ingredient, setIngredient] = useState("");

  const { ingredients, setIngredients } = useIngredients();

  const handleIngredients = (name) => {
    setIngredients((prevIngredient) => [...prevIngredient, { name }]);
    setIngredient("");
  };

  const handleIngredient = (value) => setIngredient(value);

  const filterIngredients = (value, id) => {
    return setIngredients(
      ingredients.filter(({ name }, index) => index !== id)
    );
  };

  return (
    <Section>
      <div className="title">
        <h3>Ingredientes</h3>
      </div>

      <div className="insert_ingredient">
        <p>Nome do Ingrediente</p>
        <div className="form">
          <input
            type="text"
            placeholder="Exemplo: 200g de farinha de trigo"
            value={ingredient}
            onChange={(e) => handleIngredient(e.target.value)}
            onKeyPress={(e) =>
              e.which === 13 && ingredient
                ? handleIngredients(e.target.value)
                : null
            }
          />
          <button
            onClick={() => (ingredient ? handleIngredients(ingredient) : null)}
          >
            <span>Adicionar</span>
          </button>
        </div>
      </div>

      <div className="ingredients">
        {ingredients.map(({ name }, index) => (
          <div key={index}>
            <p>{name}</p>
            <img
              src={ImageClose}
              alt="Del"
              title="Deletar ingrediente"
              onClick={() => filterIngredients(name, index)}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
