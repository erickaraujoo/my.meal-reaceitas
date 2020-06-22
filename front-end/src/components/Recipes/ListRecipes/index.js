import React from "react";

import ImageReport from "./../../../assets/recipe_icon.png";
import ImageHeart from "./../../../assets/heart_blue.png";

import { Recipe, ImageRecipe } from "./styles";

export default function ListRecipes({ recipes, loading, error }) {
  if (error) {
    return (
      <>
        <p>Não foi possível se conectar com o banco de dados</p>
      </>
    );
  }

  const returnDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <Recipe>
      <ol className="list-recipes">
        {recipes.map((recipe, index) => (
          <li key={index}>
            {index === 0 ? (
              <div className="best-recipe">
                <img src={ImageReport} loading="auto" alt="Best" />
                <p>Esta é a receita que você esta procurando!</p>
              </div>
            ) : (
              ""
            )}
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
                <p> {returnDate(recipe.data_criacao)} </p>
              </div>

              <div className="avaliation-info">
                Avaliação:
                <p className="note-avaliation"> 8,9 </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      {loading && <p>Carregando...</p>}
    </Recipe>
  );
}
