import React, { lazy } from "react";

import { Section } from "./styles";

import ImageAddImgRecipe from "./../../../assets/profile/imageRecipe.png";
import ImageDescription from "./../../../assets/profile/descriptionRecipe.png";

import FileList from "./FileList";
import Upload from "./Upload";

export default function GeneralData() {
  const NameRecipe = lazy(() => import("./NameRecipe"));
  const Description = lazy(() => import("./Description"));

  return (
    <Section>
      <div className="title">
        <h3>Dados Gerais</h3>
      </div>

      <div className="general_data">
        <div className="image_recipe">
          <div className="title">
            <img src={ImageAddImgRecipe} alt="recipe" />
            <p>Insira uma imagem</p>
          </div>
          <Upload />
          <FileList />
        </div>
        <div className="data_recipe">
          <div className="name_recipe">
            <div className="title">
              <img src={ImageAddImgRecipe} alt="recipe" />
              <p>Nome da Receita</p>
            </div>

            <NameRecipe />
          </div>
          <div className="description_recipe">
            <div className="title">
              <img src={ImageDescription} alt="description" />
              <p>Descrição</p>
            </div>

            <Description />
          </div>
        </div>
      </div>
    </Section>
  );
}
