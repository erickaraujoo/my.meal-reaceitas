import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import ImageReport from "./../../../assets/recipe_icon.png";
import ImageHeart from "./../../../assets/recipes/heart.png";
import ImageClose from "./../../../assets/recipes/close.png";

import { Recipe, ImageRecipe } from "./styles";

import { useIngredients } from "./../../../context/Recipes/Filters";

export default function ListRecipes() {
  const { data, error, loading } = useSelector((state) => state.recipes);
  const { ingredients, setIngredients } = useIngredients();

  const returnDate = (date) => date.toLocaleDateString();

  const filterIngredients = (id) => {
    return setIngredients(ingredients.filter((valuem, index) => index !== id));
  };

  return (
    <Recipe>
      <div className="list_ingredients">
        {ingredients.map(({ name }, index) => (
          <div key={index} className="ingredients">
            <p>{name}</p>
            <img
              src={ImageClose}
              alt="Del"
              title="Deletar ingrediente"
              onClick={() => filterIngredients(index)}
            />
          </div>
        ))}
      </div>
      <ol className="list-recipes">
        {data.content
          ? data.content.map((recipe, index) => (
              <li key={index}>
                {index === 0 ? (
                  <div className="best-recipe">
                    <img src={ImageReport} loading="auto" alt="Best" />
                    <p>Esta é a receita que você esta procurando!</p>
                  </div>
                ) : null}
                <div className="image-recipe">
                  <ImageRecipe background={recipe.imagem} />
                </div>

                <div className="data-recipe">
                  <strong> {recipe.title} </strong>
                  <p className="author">Por: {recipe.nome} </p>

                  <p className="description">
                    {recipe.description ? recipe.description : "Sem descrição"}
                  </p>
                </div>

                <div className="info-recipe">
                  <div className="favorite-info">
                    <img src={ImageHeart} alt="Favoritos" />
                    <p>
                      <span> 213 </span> pessoas
                    </p>
                  </div>

                  <div className="access-info">
                    <strong> {recipe.acessos} </strong> acessos
                  </div>

                  <div className="date-info">
                    <p>Data de Publicação:</p>
                    <p> {returnDate(new Date(recipe.data_criacao))} </p>
                  </div>

                  <div className="avaliation-info">
                    Avaliação:
                    <p className="note-avaliation"> 8,9 </p>
                  </div>
                </div>
              </li>
            ))
          : null}
      </ol>
      {loading && <p>Carregando...</p>}
      {error && <p>Não foi possível se conectar com o banco de dados</p>}
      {!error && !loading && !data.content.length && <p>Não foi encontrado nenhuma receita</p>}
    </Recipe>
  );
}
