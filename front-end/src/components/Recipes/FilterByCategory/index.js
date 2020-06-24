import React, { useState } from "react";

import { useCategory } from "../../../context/Recipes/Filters";

import ImageCategory from "./../../../assets/category.png";
import ImageForKnife from "./../../../assets/fork_knife.png";
import ImageFast from "./../../../assets/fast.png";
import ImagePhotograph from "./../../../assets/photograph.png";
import ImageVideo from "./../../../assets/video.png";
import ImageNovelty from "./../../../assets/novidade2.png";

import { Category } from "./styles";

export default function ListCategory() {
  const [categories] = useState([
    {
      title: "Todas as Receitas",
      image: ImageForKnife,
      alt: "All",
      value: "all_recipes",
      id: "",
    },
    { title: "Rápidas", image: ImageFast, alt: "Fast", value: "fast", id: 2 },
    {
      title: "Com Foto",
      image: ImagePhotograph,
      alt: "Photograpy",
      value: "with_photo",
      id: 3,
    },
    {
      title: "Com Vídeo",
      image: ImageVideo,
      alt: "Video",
      value: "with_video",
      id: 4,
    },
    {
      title: "Novidades",
      image: ImageNovelty,
      alt: "Novelty",
      value: "novelty",
      id: 5,
    },
  ]);

  const { setCategory } = useCategory();

  const handleCategory = (id) => setCategory(id);

  return (
    <Category id="card-category">
      <div id="titleCategory">
        <img src={ImageCategory} alt="Categoria" />
        <p>Categorias</p>
      </div>

      <ol className="list-category">
        {categories.map(({ image, title, alt, value, id }, index) => (
          <li key={index} onClick={() => handleCategory(id)}>
            <img src={image} alt={alt} />
            {title}
          </li>
        ))}
      </ol>
    </Category>
  );
}
