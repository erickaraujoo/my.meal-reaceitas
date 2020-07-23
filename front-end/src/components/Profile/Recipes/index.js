import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link, useHistory, useParams } from "react-router-dom";

import { Section } from "./styles";

import ImageAddRecipe from "./../../../assets/profile/add.png";
import ImageClose from "./../../../assets/profile/close.png";
import ImageEdit from "./../../../assets/profile/edit.png";

export default function Recipes() {
  const history = useHistory();
  const { id } = useParams();
  const { recipes } = useSelector((state) => state.user.data);
  const returnDate = (date) => date.toLocaleDateString();

  return (
    <Section>
      <div className="title">
        <h3>Suas Receitas</h3>
        <Link
          to={{
            pathname: `${id}/receita/criar`,
            source: history.location.pathname,
          }}
        >
          <img src={ImageAddRecipe} alt="add" />
        </Link>
      </div>

      <ul>
        {recipes?.content.map((recipe, index) => (
          <Link to={{ pathname: `/receitas/${recipe.idReceita}` }}>
            <li key={index}>
              <div className="image">
                <img src={recipe.imagens[0].url} alt={recipe.nome} />
              </div>
              <p className="name">{recipe.nome}</p>
              <p className="date">{returnDate(new Date(recipe.dataCriacao))}</p>
              <p className="hits">{recipe.acessos} acessos</p>
              <p className="favorites">{recipe.favoritos} favoritos</p>
              <div className="options">
                <img className="edit" src={ImageEdit} alt="edit" />
                <img className="delete" src={ImageClose} alt="delete" />
              </div>
            </li>
          </Link>
        ))}
        {!recipes?.content.length && (
          <p className="recipes_notfound">Você não possui nenhuma receita!</p>
        )}
      </ul>
    </Section>
  );
}
