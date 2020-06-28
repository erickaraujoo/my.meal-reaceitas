import React from "react";

// import { Container } from './styles';

import ImageChef from "./../../../assets/home/chef.png";
import ImagePlateFood from "./../../../assets/home/plate_food.png";

import { Opening, Search } from "./styles";

export default function SearchRecipes() {
  // const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Opening>
        <div className="text">
          <p> As melhores Receitas com os melhores Ingredientes </p>
          <h1> Meal Receitas </h1>
          <button>Começar</button>
        </div>
        <div className="image_plateFood">
          <img src={ImagePlateFood} alt="food" />
        </div>
        {/*  */}
      </Opening>
      <Search>
        <div className="title">
          <img src={ImageChef} alt="recipe" />
          <p>Encontre a Receita Perfeita</p>
        </div>
        <div className="search_recipes">
          <input type="text" id="" placeholder="Pesquisar receita..." />
          <button>BUSCAR</button>
        </div>
      </Search>
    </>
  );
}
