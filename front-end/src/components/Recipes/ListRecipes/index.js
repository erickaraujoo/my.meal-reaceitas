import React from "react";
import { useSelector } from "react-redux";

import ImageReport from "./../../../assets/recipe_icon.png";
import ImageHeart from "./../../../assets/recipes/heart.png";

import { Recipe, ImageRecipe } from "./styles";

export default function ListRecipes() {
  const { data, error, loading } = useSelector((state) => state.recipes);

  const returnDate = (date) => date.toLocaleDateString();

  if (error) return ( <> <p>Não foi possível se conectar com o banco de dados</p> </> );
  if (!data.content.length > 0) return ( <> <p>Não foi encontrado nenhuma receita</p> </> );

  return (
    <Recipe>
      <ol className="list-recipes">
        {data.content.map((recipe, index) => (
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
        ))}
      </ol>
      {loading && <p>Carregando...</p>}
    </Recipe>
  );
}
