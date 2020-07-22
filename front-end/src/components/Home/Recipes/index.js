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
  // const [recipes] = useState([
  //   {
  //     avaliation: "8,5",
  //     image:
  //       "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
  //     recipe: "Fricasse de frango",
  //     imageAuthor:
  //       "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
  //     author: "Maria Mercedez",
  //   }
  // ]);

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
            ({ avaliation, image, recipe, imageAuthor, author }, index) => (
              <li key={index}>
                <BackgroundRecipe className="image_recipe" background={image} />
                <div className="avaliation">
                  <img src={ImageStar} alt=""/>
                  <p>{avaliation}</p>
                </div>
                <div className="info_recipe">
                  <div className="name_recipe">
                    <p>{recipe}</p>
                  </div>
                  <div className="creator">
                    <img src={imageAuthor} alt="" />
                    <p>{author}</p>
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
