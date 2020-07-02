import React, { useState, useCallback, useMemo } from "react";

import { SectionModalIngredients } from "./styles";

import ImageClose from "../../assets/recipes/close.png";

import { useDisplay } from "../../context/Modal/ModalRecipes";

export function ModalIngredients() {
  const { onScreen, setOnScreen } = useDisplay();
  const [totalIngredients, setTotalIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const handleIngredients = (value) => {
    setIngredient("");
    setTotalIngredients((prevIngredient) => [...prevIngredient, value]);
  };

  const handleIngredient = (value) => setIngredient(value);

  const handleScreen = (value) => setOnScreen(value);

  const filterIngredients = (value) => {
    return setTotalIngredients(
      totalIngredients.filter((ingredient) => ingredient !== value)
    );
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
              />
              <button onClick={() => handleIngredients(ingredient)}>
                Adicionar
              </button>
            </div>
          </div>
          <div className="ingredients">
            {totalIngredients.map((ingredient, index) => (
              <div key={index}>
                <p>{ingredient}</p>
                <img
                  src={ImageClose}
                  alt="Del"
                  title="Deletar ingrediente"
                  onClick={() => filterIngredients(ingredient)}
                />
              </div>
            ))}
          </div>
          <div className="send_recipes">
            <button>Procurar</button>
          </div>
        </div>
      </SectionModalIngredients>
    );
  else return null;
}
