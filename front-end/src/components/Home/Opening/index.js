import React from "react";

import ImageOpening from "./../../../assets/home/opening.jpg";
import ImageSearch from "./../../../assets/home/search_white.png";

import { Opening, BackgroundOpening } from "./styles";

export default function SearchRecipes() {

  return (
    <Opening>
      <div className="text_opening">
        <h2>ENCONTRE AS MELHORES RECEITAS AQUI</h2>
        <p>Pesquise sua receita favorita agora</p>

        <div className="search_recipes">
          <input type="text" placeholder="Pesquisar..." />
          <button>
            <img src={ImageSearch} alt="" />
          </button>
        </div>

        <div className="get_started">
          <p>
            Ou clique no botão abaixo para nagevar pelo nosso site e conhecer
            novas receitas.
          </p>
          <button><span>Começar</span></button>
        </div>
      </div>
      <BackgroundOpening background={ImageOpening} />
    </Opening>
  );
}
