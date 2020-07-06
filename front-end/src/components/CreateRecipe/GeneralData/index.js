import React, { useMemo, useState } from "react";
import { debounce } from "lodash";

import { useGeneralData, useLoading } from "./../../../context/Recipes/Create";

import { Section } from "./styles";

import ImageAddImgRecipe from "./../../../assets/profile/imageRecipe.png";
import ImageDescription from "./../../../assets/profile/descriptionRecipe.png";

import FileList from "./../FileList";
import Upload from "./../Upload";

export default function GeneralData() {
  const { setGeneralData } = useGeneralData();
  const { loading } = useLoading();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (value) => setName(value);
  const handleDescription = (value) => setDescription(value);

  useMemo(
    debounce(() => {
      const handleGeneralData = (name, description) =>
        setGeneralData([{ name, description }]);

      if (loading) handleGeneralData(name, description);
    }, 100),
    [description, name, loading, setGeneralData]
  );

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

            <input
              type="text"
              placeholder="Digite um título..."
              value={name}
              onChange={(e) => handleName(e.target.value)}
            />
          </div>
          <div className="description_recipe">
            <div className="title">
              <img src={ImageDescription} alt="description" />
              <p>Descrição</p>
            </div>

            <textarea
              placeholder="Digite uma descrição"
              value={description}
              onChange={(e) => handleDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </Section>
  );
}
