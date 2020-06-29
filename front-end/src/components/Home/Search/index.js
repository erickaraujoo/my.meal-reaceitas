import React, { useState } from "react";

// import { Container } from './styles';

import ImageChef from "./../../../assets/home/chef.png";
// import ImagePlateFood from "./../../../assets/home/plate_food.png";

import ImagePizza from "./../../../assets/home/pizza.jpeg";
import ImageCherryPie from "./../../../assets/home/cherry_pie.jpg";
import ImageMoroccanBeeef from "./../../../assets/home/moroccan_beef.jpg";
import ImageCreamyCarrot from "./../../../assets/home/creamy_carrot.jpg";
import ImageDissert from "./../../../assets/home/dissert.jpg";

import { Opening, Search, BackgroundRecipes } from "./styles";

export default function SearchRecipes() {
  // const [inputValue, setInputValue] = useState("");
  const [currentSlide, setCurrentSlide] = useState("");

  const handleSlideLeave = (event) => {
    event.target.classList.remove("current");
    setCurrentSlide("");
  };
  const handleSlideEnter = (event) => {
    event.target.classList.add("current");
    setCurrentSlide(event.target.id);
  };

  return (
    <>
      <Opening>
        <div className="container_slides">
          <BackgroundRecipes
            background={ImagePizza}
            id="1"
            className="slide"
            onMouseEnter={(e) => handleSlideEnter(e)}
            onMouseLeave={(e) => handleSlideLeave(e)}
          >
            <div className="text">
              <h3>PIZZA DE CALABRESA</h3>
            </div>
          </BackgroundRecipes>
          <BackgroundRecipes
            background={ImageCherryPie}
            id="2"
            className="slide"
            onMouseEnter={(e) => handleSlideEnter(e)}
            onMouseLeave={(e) => handleSlideLeave(e)}
          >
            <div className="text">
              <h3>TORTA DE CEREJA</h3>
            </div>
          </BackgroundRecipes>
          <BackgroundRecipes
            background={ImageMoroccanBeeef}
            id="3"
            className="slide"
            onMouseEnter={(e) => handleSlideEnter(e)}
            onMouseLeave={(e) => handleSlideLeave(e)}
          >
            <div className="text">
              <h3>CARNE MORROQUINA</h3>
            </div>
          </BackgroundRecipes>
          <BackgroundRecipes
            background={ImageCreamyCarrot}
            id="4"
            className="slide"
            onMouseEnter={(e) => handleSlideEnter(e)}
            onMouseLeave={(e) => handleSlideLeave(e)}
          >
            <div className="text">
              <h3>CENOURA CREMOSA</h3>
            </div>
          </BackgroundRecipes>
          <BackgroundRecipes
            background={ImageDissert}
            id="5"
            className="slide"
            onMouseEnter={(e) => handleSlideEnter(e)}
            onMouseLeave={(e) => handleSlideLeave(e)}
          >
            <div className="text">
              <h3>SUNDAE DE MORANGO</h3>
            </div>
          </BackgroundRecipes>
        </div>
        {/* <div className="text">
          <p> As melhores Receitas com os melhores Ingredientes </p>
          <h1> Meal Receitas </h1>
          <button>Começar</button>
        </div>
        <div className="image_plateFood">
          <img src={ImagePlateFood} alt="food" />
        </div> */}
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
