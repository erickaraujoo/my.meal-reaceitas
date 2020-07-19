import React, { useState } from "react";

import { Recipes, BackgroundRecipe } from "./styles";

import { useButton } from "./../../../context/Home/Recipes";

import ImageStar from "./../../../assets/home/start.png";

export default function ListRecipes() {
  const { currentButton, setCurrentButton } = useButton();

  const [buttons] = useState([
    { value: "Tortas", id: 1 },
    { value: "Lanches", id: 2 },
    { value: "Bebidas", id: 3 },
    { value: "Bolos", id: 4 },
    { value: "Massas", id: 5 },
    { value: "Light", id: 6 },
  ]);
  const [recipes] = useState([
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
    {
      avaliation: "8,5",
      image:
        "https://images.squarespace-cdn.com/content/5b625f0d96d455ef934bf48c/1562155589911-QZQQHTBXH99SJ4ILLR0K/WhatsApp+Image+2019-07-02+at+12.57.55.jpeg?format=1000w&content-type=image%2Fjpeg",
      recipe: "Fricasse de frango",
      imageAuthor:
        "https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress",
      author: "Maria Mercedez",
    },
  ]);

  const handleCurrentButton = (value) => {
    setCurrentButton(value);
  };

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
              onClick={() => handleCurrentButton(id)}
            >
              {value}
            </button>
          ))}
        </ul>
      </div>

      <div className="recipes">
        <ul>
          {recipes.map(
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
        </ul>
      </div>

      <div className="more_recipes">
        <button>Mais Receitas</button>
      </div>
    </Recipes>
  );
}