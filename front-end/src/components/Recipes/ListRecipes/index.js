import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ImageReport from "./../../../assets/recipe_icon.png";
import ImageHeart from "./../../../assets/recipes/heart.png";
import ImageClose from "./../../../assets/recipes/close.png";

import { Recipe, ImageRecipe } from "./styles";

import { useIngredients } from "./../../../context/Recipes/Filters";

export default function ListRecipes() {
  const { data, error, loading } = useSelector((state) => state.recipes);
  const { ingredients, setIngredients } = useIngredients();

  const returnDate = (date) => date.toLocaleDateString();
  const returnTotal = (value) => {
    let total = 0;
    value.map(({ nota }) => (total += nota));
    total = total / value.length;
    return total.toFixed(1);
  };

  const filterIngredients = (id) =>
    setIngredients(ingredients.filter((value, index) => index !== id));

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
              <Link
                key={index}
                to={{ pathname: `/receitas/${recipe.idReceita}` }}
              >
                <li>
                  {index === 0 ? (
                    <div className="best-recipe">
                      <img src={ImageReport} loading="auto" alt="Best" />
                      <p>Esta é a receita que você esta procurando!</p>
                    </div>
                  ) : null}
                  <div className="image-recipe">
                    <ImageRecipe background={recipe.imagens[0]?.url} />
                  </div>

                  <div className="data-recipe">
                    <strong> {recipe.title} </strong>
                    <p className="author">Por: {recipe.nome} </p>

                    <p className="description">
                      {recipe.descricao
                        ? recipe.descricao
                        : "Sem descrição"}
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
                      <p> {returnDate(new Date(recipe.dataCriacao))} </p>
                    </div>

                    <div className="avaliation-info">
                      {recipe.avaliacoes.length ? (
                        <>
                          Avaliação:
                          <p className="note-avaliation">
                            {" "}
                            {returnTotal(recipe.avaliacoes)}{" "}
                          </p>
                        </>
                      ) : (
                        <p>Sem avaliação</p>
                      )}
                    </div>
                  </div>
                </li>
              </Link>
            ))
          : null}
      </ol>
      {loading && <p>Carregando...</p>}
      {error && <p>Não foi possível se conectar com o banco de dados</p>}
      {!error && !loading && !data.content.length && (
        <p>Não foi encontrado nenhuma receita</p>
      )}
    </Recipe>
  );
}
