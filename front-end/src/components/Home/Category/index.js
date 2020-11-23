import React, { useState } from "react";

import InfiniteCarousel from "react-leaf-carousel";

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

import { useCategory } from "./../../../context/Recipes/Filters.js";

import { Category } from "./styles";

export default function ListCategory() {
  const [categories] = useState([
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

  const { setCategory } = useCategory();

  const handleCategory = (id) => setCategory(id);

  return (
    <Category>
      <h2>Categorias</h2>

      <p className="subtitle">
        Selecionamos para você as melhores categorias para nossas receitas,
        busque agora mesmo!
      </p>

      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={5}
        slidesToShow={5}
        scrollOnDevice={true}
      >
        {categories.map(({ image, title, alt, id }, index) => (
          <div className="category" key={index} onClick={() => handleCategory(id)}>
            <img src={image} alt={alt} />
            <p>{title}</p>
          </div>
        ))}
      </InfiniteCarousel>
    </Category>
  );
}
