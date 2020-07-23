import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircleSpinner } from "react-spinners-kit";

import { useCategory } from "../../../context/Recipes/Filters";

import { Recipes, BackgroundRecipe } from "./styles";

import ImageStar from "./../../../assets/home/start.png";

export default function ListRecipes() {
  const recipes = useSelector(state => state.recipes);
  const { setCategory } = useCategory();
  const [currentButton, setCurrentButton] = useState(2);
  const [buttons] = useState([
    { value: "Tortas", id: 2 },
    { value: "Lanches", id: 12 },
    { value: "Aves", id: 6 },
    { value: "Bolos", id: 1 },
    { value: "Massas", id: 10 },
    { value: "Light", id: 13 },
  ]);
  const returnTotal = (value) => {
    let total = 0;
    value.map(({ nota }) => (total += nota));
    total = total / value.length;
    return total.toFixed(1);
  };

  useEffect(() => setCategory(currentButton), [currentButton, setCategory])

  const handleCurrentButton = (value, id) => setCurrentButton(id);

  return (
    <Recipes>
      <h2>Nossas Receitas</h2>

      <div className="buttons">
        <ul>
          {buttons.map(({ value, id }, index) => (
            <button
              key={index}
              id={id}
              className={currentButton === id ? "current" : null}
              onClick={() => handleCurrentButton(value, id)}
            >
              {value}
            </button>
          ))}
        </ul>
      </div>

      <div className="recipes">
        <ul>
          {recipes.data.content.map(
            ({ avaliacoes, imagens, nome, usuario }, index) => (
              <li key={index}>
                <BackgroundRecipe className="image_recipe" background={imagens[0]} />
                <div className="avaliation">
                  <img src={ImageStar} alt=""/>
                  <p>{returnTotal(avaliacoes)}</p>
                </div>
                <div className="info_recipe">
                  <div className="name_recipe">
                    <p>{nome}</p>
                  </div>
                  <div className="creator">
                    <img src={usuario.imagem} alt="" />
                    <p>{usuario.nome}</p>
                  </div>
                </div>
              </li>
            )
          )}
          {recipes.loading && (
            <div className='loading_recipes'>
              <p>Carregando...</p>
              <CircleSpinner size={25} color={'#F35E07'} />
            </div>
          )}
          {recipes.success && !recipes.data.content.length && (
            <div className='loading_recipes'>
              <p>Não foi encontrado nenhuma receita com esta categoria!</p>
            </div>
          )}
          {recipes.error && (
            <div className='loading_recipes'>
              <p>Erro ao tentar se conectar com o banco!</p>
            </div>
          )}
        </ul>
      </div>

      <div className="more_recipes">
        <Link to={{ pathname: '/receitas' }}>
          <button>Mais Receitas</button>
        </Link>
      </div>
    </Recipes>
  );
}
