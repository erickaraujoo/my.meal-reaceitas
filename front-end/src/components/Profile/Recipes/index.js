import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { ModalDeleteRecipe } from "../../Elements/Modal";

import { Section } from "./styles";

import ImageAddRecipe from "./../../../assets/profile/add.png";
import ImageClose from "./../../../assets/profile/close.png";
import ImageEdit from "./../../../assets/profile/edit.png";

export default function Recipes() {
  const history = useHistory();
  const { id } = useParams();
  const { recipes } = useSelector((state) => state.user.data);
  const returnDate = (date) => date.toLocaleDateString();
  const [
    visibleModalConfirmDeleteRecipe,
    setVisibleModalConfirmDeleteRecipe,
  ] = useState(false);
  
  const [recipeSelected, setRecipeSelected] = useState('');

  const handleVisible = (booelan) => setVisibleModalConfirmDeleteRecipe(booelan);
  const handleRecipeSelected = (id) => setRecipeSelected(id);

  return (
    <>
      <ModalDeleteRecipe
        visible={visibleModalConfirmDeleteRecipe}
        id={recipeSelected}
        width={"750px"}
        height={"auto"}
        padding={"60px 80px 50px"}
        borderRadius={"10px"}
        titleModal={"Excluir receita!"}
        textModal={
          "Você está prestes a excluir uma receita"
        }
        textButton={"Confirmar"}
        widthButton={"200px"}
        heightButton={"50px"}
        onClick={() => handleVisible(false)}
      />
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
          {/* {recipes?.content.map((recipe, index) => (
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
                <img
                  className="delete"
                  src={ImageClose}
                  alt="delete"
                  onClick={() => setVisibleModalConfirmDeleteRecipe(true)}
                />
              </div>
            </li>
          ))} */}
          {/* {!recipes?.content.length && (
            <p className="recipes_notfound">Você não possui nenhuma receita!</p>
          )} */}
          
          <li>
              <div className="image">
                <img src="" alt="" />
              </div>
              <p className="name">Reeita teste</p>
              <p className="date">25 de junho de 2020</p>
              <p className="hits">12 acessos</p>
              <p className="favorites">15 favoritos</p>
              <div className="options">
                <img className="edit" src={ImageEdit} alt="edit" />
                <img
                  className="delete"
                  src={ImageClose}
                  alt="delete"
                  onClick={() => {
                    handleVisible(true)
                    handleRecipeSelected(1)
                  }}
                />
              </div>
            </li>
        </ul>
      </Section>
    </>
  );
}
