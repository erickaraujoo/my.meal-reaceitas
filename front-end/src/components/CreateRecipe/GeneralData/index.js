import React, { lazy } from "react";

import { Section, ContainerFlex } from "./styles";

import ImageAddImgRecipe from "./../../../assets/profile/imageRecipe.png";
import ImageDescription from "./../../../assets/profile/descriptionRecipe.png";
import ImagePreparationTime from "./../../../assets/profile/preparation_time.png";
import ImageRevenue from "./../../../assets/profile/revenue.png";
import ImageObs from "./../../../assets/profile/obs.png";

import FileList from "./FileList";
import Upload from "./Upload";

export default function GeneralData() {
  const NameRecipe = lazy(() => import("./NameRecipe"));
  const Description = lazy(() => import("./Description"));
  const Observation = lazy(() => import("./Observation"));
  const Revenue = lazy(() => import("./Revenue"));
  const PreparationTime = lazy(() => import("./PreparationTime"));

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

          <ContainerFlex>
            <div className="preparation_time">
              <div className="title">
                <img src={ImagePreparationTime} alt="time"/>
                <p>Tempo de Preparo</p>
              </div>
              <div className="input">
                <PreparationTime /> <p>Minutos</p>
              </div>
            </div>
            <div className="yield_recipe">
              <div className="title">
                <img src={ImageRevenue} alt="time"/>
                <p>Rendimento</p>
              </div>
              <div className="input">
                <Revenue /> <p>Porções</p>
              </div>
            </div>
          </ContainerFlex>

          <div className="observation_recipe">
            <div className="title">
              <img src={ImageObs} alt="obs"/>
              <p>Observação (Opcional)</p>
            </div>

            <Observation />
          </div>
        </div>
      </div>
    </Section>
  );
}
