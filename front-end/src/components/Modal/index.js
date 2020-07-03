import React, { useState, useCallback, useMemo } from "react";

import { SectionModalIngredients } from "./styles";

import { useIngredients } from "./../../context/Recipes/Filters";

import ImageClose from "../../assets/recipes/close.png";

import { useDisplay } from "../../context/Modal/ModalRecipes";

export function ModalIngredients() {
  const { onScreen, setOnScreen } = useDisplay();
  const [totalIngredients, setTotalIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const { setIngredients } = useIngredients();

  const handleIngredients = (name) => {
    setTotalIngredients((prevIngredient) => [...prevIngredient, { name }]);
    setIngredient("");
  };

  const handleIngredient = (value) => setIngredient(value);

  const handleScreen = (value) => setOnScreen(value);

  const filterIngredients = (value, id) => {
    return setTotalIngredients(
      totalIngredients.filter(({ name }, index) => index !== id)
    );
  };

  const handleContextIngredients = (ingredients) => {
    setIngredients(ingredients);
    handleScreen(false);
  };

  if (onScreen)
    return (
      <SectionModalIngredients>
        <div className="modal_ingredients">
          <div className="title">
            <h2>Ingredientes</h2>
            <img src={ImageClose} alt="" onClick={() => handleScreen(false)} />
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
                onClick={() =>
                  ingredient ? handleIngredients(ingredient) : null
                }
              >
                Adicionar
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
          <div className="send_recipes">
            <button onClick={() => handleContextIngredients(totalIngredients)}>
              Procurar
            </button>
          </div>
        </div>
      </SectionModalIngredients>
    );
  else return null;
}
