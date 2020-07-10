import React, { useState } from "react";

import { Section, ContainerWithDirectionRow } from "./styles";

import ImageName from "./../../../assets/edit_profile/name.png";
import ImageDescription from "./../../../assets/edit_profile/biography.png";
import ImageCountry from "./../../../assets/edit_profile/country.png";
import ImageLocation from "./../../../assets/edit_profile/location.png";
import ImageClips from "./../../../assets/edit_profile/clips.png";

export default function ProfileData() {
  return (
    <Section>
      <form action="">
        <div className="personal_data">
          <div className="container_input">
            <label htmlFor="name">
              <img src={ImageName} alt="" />
              Nome do Perfil
            </label>
            <input id="name" placeholder="Digite um novo nome" />
          </div>
          <div className="container_input">
            <label htmlFor="biography">
              <img src={ImageDescription} alt="" />
              Biografia
            </label>
            <textarea
              id="biography"
              placeholder="Digite uma nova Biografia"
              rows="5"
            ></textarea>
          </div>
          <ContainerWithDirectionRow>
            <div className="container_input">
              <label htmlFor="country">
                <img src={ImageLocation} alt="" />
                Cidade (Opcional)
              </label>
              <input id="country" placeholder="Digite uma nova Cidade" />
            </div>
            <div className="container_input">
              <label htmlFor="state">
                <img src={ImageCountry} alt="" />
                Estado (Opcional)
              </label>
              <input id="state" placeholder="Digite um novo Estado" />
            </div>
          </ContainerWithDirectionRow>
          <div className="container_input">
            <label htmlFor="complement">
              <img src={ImageClips} alt="" />
              Complemento (Opcional)
            </label>
            <input id="complement" placeholder="Digite um complemento" />
          </div>
        </div>

        <button type="submit" className="submit">
          <span>EDITAR DADOS</span>
        </button>
      </form>
    </Section>
  );
}
