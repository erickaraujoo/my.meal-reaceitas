import React from "react";

import { Section } from "./styles";
import { useSelector } from "react-redux";

import ImageTime from "./../../../assets/info_recipe/time.png";
import ImagePortion from "./../../../assets/info_recipe/portion.png";
import ImageViews from "./../../../assets/info_recipe/views.png";

export default function GeneralInfo() {
  const { nome, tempo_preparo, rendimento, acessos } = useSelector(
    (state) => state.recipes.data
  );
  return (
    <Section>
      <h2>{nome}</h2>
      <div className="info_recipe">
        <div className="time">
          <img src={ImageTime} alt="" />
          <p>{tempo_preparo} mins</p>
        </div>
        <div className="portion">
          <img src={ImagePortion} alt="" />
          <p>{rendimento} Porções</p>
        </div>
        <div className="views">
          <img src={ImageViews} alt="" />
          <p>{acessos} acessos</p>
        </div>
      </div>
    </Section>
  );
}
