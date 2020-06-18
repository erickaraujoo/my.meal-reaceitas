import React, { useState, useEffect } from "react";

import ImageCategory from "./../../../assets/category.png";
import ImageForKnife from "./../../../assets/fork_knife.png";
import ImageFast from "./../../../assets/fast.png";
import ImagePhotograph from "./../../../assets/photograph.png";
import ImageVideo from "./../../../assets/video.png";
import ImageNovelty from "./../../../assets/novidade2.png";

import { Category } from './styles';

export default function ListCategory() {
  const [categories, setCategories] = useState([
    { title: "Todas as Receitas", image: ImageForKnife, alt: "All", value: 'all_recipes' },
    { title: "Rápidas", image: ImageFast, alt: "Fast", value: 'fast' },
    { title: "Com Foto", image: ImagePhotograph, alt: "Photograpy", value: 'with_photo' },
    { title: "Com Vídeo", image: ImageVideo, alt: "Video", value: 'with_video' },
    { title: "Novidades", image: ImageNovelty, alt: "Novelty", value: 'novelty' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = title => setSelectedCategory(title);

  return (
    <Category id="card-category">
      <div id="titleCategory">
        <img src={ImageCategory} alt="Categoria" />
        <p>Categorias</p>
      </div>

      <ol className="list-category">
        {categories.map(({ image, title, alt, value }, index) => (
          <li key={index} onClick={() => handleCategory(value)}>
            <img src={image} alt={alt} />
            {title}
          </li>
        ))}
      </ol>
    </Category>
  );
}