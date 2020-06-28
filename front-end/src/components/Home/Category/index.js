import React, { useState } from "react";

import ImageCandy from "./../../../assets/recipes/candy.png";
import ImageBeef from "./../../../assets/recipes/beef.png";
import ImageFish from "./../../../assets/recipes/fish.png";
import ImageSalads from "./../../../assets/recipes/salads.png";
import ImagePastas from "./../../../assets/recipes/pastas.png";
import ImageDessert from "./../../../assets/recipes/dessert.png";

import { useCategory } from "./../../../context/Recipes/Filters";

import { Category } from "./styles";

export default function ListCategory() {
  const [categories] = useState([
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
      title: "Doces",
      image: ImageCandy,
      alt: "doces",
      id: 3,
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
      title: "Saladas",
      image: ImageSalads,
      alt: "saladas",
      id: 8,
    },
  ]);

  const { setCategory } = useCategory();

  const handleCategory = (id) => setCategory(id);

  return (
    <Category>
      <h2>Categorias</h2>

      <p className="subtitle">
        Selecionamos para você as melhores categorias para nossas receitas, busque agora mesmo!
      </p>

      <ul className="list_category">
        {categories.map(({ image, title, alt, id }, index) => (
          <li key={index} onClick={() => handleCategory(id)}>
            <img src={image} alt={alt} />
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </Category>
  );
}
