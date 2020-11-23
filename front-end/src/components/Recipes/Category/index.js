import React, { useState } from "react";

import { useCategory } from "../../../context/Recipes/Filters.js";

import ImageCategory from "./../../../assets/recipes/category.png";
import ImageForKnife from "./../../../assets/recipes/fork_knife.png";
import ImageCake from "./../../../assets/recipes/cake.png";
import ImagePie from "./../../../assets/recipes/pie.png";
import ImageCandy from "./../../../assets/recipes/candy.png";
import ImageBeef from "./../../../assets/recipes/beef.png";
import ImageFish from "./../../../assets/recipes/fish.png";
import ImageChicken from "./../../../assets/recipes/chicken.png";
import ImageSeafood from "./../../../assets/recipes/seafood.png";
import ImageSalads from "./../../../assets/recipes/salads.png";
import ImageSoup from "./../../../assets/recipes/soup.png";
import ImagePastas from "./../../../assets/recipes/pastas.png";
import ImageDessert from "./../../../assets/recipes/dessert.png";
import ImageLunch from "./../../../assets/recipes/lunch.png";
import ImageLight from "./../../../assets/recipes/light.png";
import ImageGrains from "./../../../assets/recipes/grains.png";

import { Category } from "./styles";

export default function ListCategory() {

  const [categories] = useState([
    {
      title: "Todas as Receitas",
      image: ImageForKnife,
      alt: "All",
      id: "",
    },
    {
      title: "Bolos",
      image: ImageCake,
      alt: "bolos",
      id: 1,
    },
    {
      title: "Tortas",
      image: ImagePie,
      alt: "tortas",
      id: 2,
    },
    {
      title: "Doces",
      image: ImageCandy,
      alt: "doces",
      id: 3,
    },
    {
      title: "Carnes",
      image: ImageBeef,
      alt: "carnes",
      id: 4,
    },
    {
      title: "Peixes",
      image: ImageFish,
      alt: "peixes",
      id: 5,
    },
    {
      title: "Aves",
      image: ImageChicken,
      alt: "aves",
      id: 6,
    },
    {
      title: "Frutas do mar",
      image: ImageSeafood,
      alt: "frutos do mar",
      id: 7,
    },
    {
      title: "Saladas",
      image: ImageSalads,
      alt: "saladas",
      id: 8,
    },
    {
      title: "Sopas",
      image: ImageSoup,
      alt: "sopas",
      id: 9,
    },
    {
      title: "Massas",
      image: ImagePastas,
      alt: "massas",
      id: 10,
    },
    {
      title: "Sobremesas",
      image: ImageDessert,
      alt: "sobremesas",
      id: 11,
    },
    {
      title: "Lanches",
      image: ImageLunch,
      alt: "lanches",
      id: 12,
    },
    {
      title: "Light",
      image: ImageLight,
      alt: "light",
      id: 13,
    },
    {
      title: "Grãos",
      image: ImageGrains,
      alt: "grãos",
      id: 14,
    },
  ]);

  const { category, setCategory } = useCategory();

  const handleCategory = (id) => setCategory(id);

  return (
    <Category id="card-category">
      <div id="titleCategory">
        <img src={ImageCategory} alt="Categoria" />
        <p>Categorias</p>
      </div>

      <ol className="list-category">
        {categories.map(({ image, title, alt, value, id }, index) => (
          <li
            key={index}
            className={category === id ? "current_category" : null}
            onClick={() => handleCategory(id)}
          >
            <img src={image} alt={alt} />
            {title}
          </li>
        ))}
      </ol>
    </Category>
  );
}
