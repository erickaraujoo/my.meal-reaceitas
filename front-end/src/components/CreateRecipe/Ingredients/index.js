import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

import { useIngredients, useLoading } from "./../../../context/Recipes/Create";

import { Section } from "./styles";

import ImageClose from "../../../assets/recipes/close.png";

export default function Ingredients() {
  const [totalIngredients, setTotalIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const { setIngredients } = useIngredients();
  const { loading } = useLoading();

  const handleIngredients = (name) => {
    setTotalIngredients((prevIngredient) => [...prevIngredient, { name }]);
    setIngredient("");
  };

  const handleIngredient = (value) => setIngredient(value);

  const filterIngredients = (value, id) => {
    return setTotalIngredients(
      totalIngredients.filter(({ name }, index) => index !== id)
    );
  };

  useMemo(
    debounce(() => {
      const handleIngredients = (ingredients) => setIngredients(ingredients);

      if (loading) handleIngredients(totalIngredients);
    }, 300),
    [loading]
  );

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
        {totalIngredients.map(({ name }, index) => (
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
