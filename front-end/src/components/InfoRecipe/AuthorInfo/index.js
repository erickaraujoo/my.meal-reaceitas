import React from "react";
import { useSelector } from "react-redux";

import { Section, ImageRecipe } from "./styles";

import ImageRecipes from "./../../../assets/info_recipe/recipes.png";
import ImageLike from "./../../../assets/info_recipe/like.png";

export default function GeneralAuthorInfo() {
  const receita = useSelector((state) => state.recipes.data);
  const { success } = useSelector((state) => state.recipes);
  const returnDate = (date) => date.toLocaleDateString();

  return (
    <Section>
      <ImageRecipe className="image_recipe" background={success ? receita.imagens[0].url : null} />
      <div className="info_author">
        <div className="profile">
          <div className="author">
            <img src={receita.usuario?.imagem} alt=""
            />
            <h4>{receita.usuario?.nome}</h4>
          </div>
          <div className="experience">
            <p>
              Cozinheiro desde {returnDate(new Date(receita.usuario?.dataCriacao))}
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
