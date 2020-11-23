import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageOpening from "./../../../assets/home/opening.jpg";
import ImageSearch from "./../../../assets/home/search_white.png";

import { Opening, BackgroundOpening } from "./styles";

export default function SearchRecipes() {
  const [inputSearch, setInputSearch] = useState("");
  const handleSearch = (value) => setInputSearch(value);

  return (
    <Opening>
      <div className="text_opening">
        <h2>ENCONTRE AS MELHORES RECEITAS AQUI</h2>
        <p>Pesquise sua receita favorita agora</p>

        <div className="search_recipes">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={inputSearch}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Link to={{ pathname: "/receitas", params: inputSearch }}>
            <button>
              <img src={ImageSearch} alt="" />
            </button>
          </Link>
        </div>

        <div className="get_started">
          <p>
            Ou clique no botão abaixo para nagevar pelo nosso site e procurar
            novas receitas.
          </p>
          <Link to={{ pathname: "/receitas" }}>
            <button>
              <span>Procurar!</span>
            </button>
          </Link>
        </div>
      </div>
      <BackgroundOpening background={ImageOpening} />
    </Opening>
  );
}
