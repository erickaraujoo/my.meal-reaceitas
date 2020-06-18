import React from "react";

import ImageReport from "./../../../assets/recipe_icon.png";
import ImageHeart from "./../../../assets/heart_blue.png";

import { ImageRecipe } from './styles';

export default function ListRecipes({ recipes, loading, error }) {
  if (error) {
    alert("Erro ao conectar com o banco de dados, tente novamente mais tarde!");
    return <p>Não foi possível se conectar com o banco de dados</p>;
  }

  recipes.map((recipe, index) => {
    return console.log(recipe.imagem)
  })

  return (
    <>
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
                <strong>1.152</strong> acessos
              </div>

              <div className="date-info">
                <p>Data de Publicação:</p>
                <p> 25/03/2020 </p>
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
    </>
  );
}