import React from "react";
import { useSelector } from "react-redux";

import { Section, ImageRecipe } from "./styles";

import ImageRecipes from "./../../../assets/info_recipe/recipes.png";
import ImageLike from "./../../../assets/info_recipe/like.png";

export default function GeneralAuthorInfo() {
  const { usuario, imagem } = useSelector((state) => state.recipes.data);
  const returnDate = (date) => date.toLocaleDateString();

  return (
    <Section>
      <ImageRecipe className="image_recipe" background={imagem} />
      <div className="info_author">
        <div className="profile">
          <div className="author">
            <img
              src="https://images.pexels.com/users/avatars/372897/max-andrey-744.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress"
              alt=""
            />
            <h4>{usuario?.nome}</h4>
          </div>
          <div className="experience">
            <p>
              Cozinheiro desde {returnDate(new Date(usuario?.data_criacao))}
            </p>
          </div>
        </div>
        <div className="author_recipes_info">
          <div className="created_recipes">
            <img src={ImageRecipes} alt="" />
            <p>16 receitas criadas</p>
          </div>
          <div className="total_views">
            <img src={ImageLike} alt="" />
            <p>153 acessos totais</p>
          </div>
        </div>
        <div className="visit_profile">
          <button>Visitar Perfil</button>
        </div>
      </div>
    </Section>
  );
}
