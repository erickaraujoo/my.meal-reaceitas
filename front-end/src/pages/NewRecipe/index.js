import React, { useState, lazy } from "react";

import { Main } from "./styles";

import ImagePremium from "./../../assets/profile/premium.png";
import ImageAddImgRecipe from "./../../assets/profile/imageRecipe.png";
import ImageDescription from "./../../assets/profile/descriptionRecipe.png";
import ImageLoadingFile from "./../../assets/profile/loading_file.png";
import ImageDelete from "./../../assets/profile/close_red.png";
import ImageAddTopic from "./../../assets/profile/add.png";

export default function NewRecipe() {
  const Home = lazy(() => import("./../../components/Header"));
  const Footer = lazy(() => import("./../../components/Footer"));

  const [ingredient, setIngredient] = useState("");
  const [totalIngredients, setTotalIngredients] = useState([]);

  const handleIngredient = (value) => setIngredient(value);

  const handleTotalIngredient = (value) => {
    setIngredient("");
    return setTotalIngredients((prevIngredient) => [...prevIngredient, value]);
  };

  const filterIngredients = (value) => {
    return setTotalIngredients(
      totalIngredients.filter((ingredient) => ingredient !== value)
    );
  };

  return (
    <Main>
      <div className="background_recipe"></div>

      <section className="section_header">
        <div className="background"></div>
        <div className="main_info">
          <h2>Crie sua própria Receita</h2>

          <div className="premium_member">
            <img src={ImagePremium} alt="" />
            <p>Premium</p>
          </div>
        </div>
      </section>

      <section className="section_generalData">
        <div className="title">
          <h3>Dados Gerais</h3>
        </div>

        <div className="general_data">
          <div className="image_recipe">
            <div className="title">
              <img src={ImageAddImgRecipe} alt="recipe" />
              <p>Insira uma imagem</p>
            </div>

            <div className="load_image">
              <img src={ImageLoadingFile} alt="loading file" />
              <p>Carregar Imagem</p>
            </div>
          </div>
          <div className="data_recipe">
            <div className="name_recipe">
              <div className="title">
                <img src={ImageAddImgRecipe} alt="recipe" />
                <p>Nome da Receita</p>
              </div>

              <input
                type="text"
                name=""
                id=""
                placeholder="Digite um título..."
              />
            </div>
            <div className="description_recipe">
              <div className="title">
                <img src={ImageDescription} alt="description" />
                <p>Descrição</p>
              </div>

              <textarea
                name=""
                id=""
                placeholder="Digite uma descrição"
              ></textarea>
            </div>
          </div>
        </div>
      </section>

      <section className="section_methodPreparation">
        <div className="title">
          <h3>Modo de Preparo</h3>
        </div>

        <ul>
          <li>
            <div className="text_method">
              <p>
                <strong> 1. </strong>
                Em um liquidificador, adicione os ovos, o açúcar, o fubá, a
                farinha de trigo, o óleo, o leite e o fermento, depois bata até
                a massa ficar lisa e homogênea.
              </p>
            </div>
            <div className="options">
              <img src={ImageDelete} alt="delete" />
            </div>
          </li>
          <li>
            <div className="text_method">
              <p>
                <strong> 1. </strong>
                Em um liquidificador, adicione os ovos, o açúcar, o fubá, a
                farinha de trigo, o óleo, o leite e o fermento, depois bata até
                a massa ficar lisa e homogênea.
              </p>
            </div>
            <div className="options">
              <img src={ImageDelete} alt="delete" />
            </div>
          </li>
          <li>
            <div className="text_method">
              <p>
                <strong> 1. </strong>
                Em um liquidificador, adicione os ovos, o açúcar, o fubá, a
                farinha de trigo, o óleo, o leite e o fermento, depois bata até
                a massa ficar lisa e homogênea.
              </p>
            </div>
            <div className="options">
              <img src={ImageDelete} alt="delete" />
            </div>
          </li>
          <li>
            <div className="text_method">
              <p>
                <strong> 1. </strong>
                Em um liquidificador, adicione os ovos, o açúcar, o fubá, a
                farinha de trigo, o óleo, o leite e o fermento, depois bata até
                a massa ficar lisa e homogênea.
              </p>
            </div>
            <div className="options">
              <img src={ImageDelete} alt="delete" />
            </div>
          </li>
        </ul>

        <div className="add_topic">
          <p>Adicionar Tópico...</p>
          <img src={ImageAddTopic} alt="Add Topic" />
        </div>
      </section>

      <section className="section_ingredients">
        <div className="title">
          <h3>Ingredientes</h3>
        </div>

        <div className="create_ingredient">
          <label htmlFor="ingredient">Nome do Ingrediente</label>
          <div className="form_ingredient">
            <input
              id="ingredient"
              placeholder="Exemplo: 200g de farinha de trigo"
              value={ingredient}
              onChange={({ target }) => handleIngredient(target.value)}
            />
            <button
              onClick={() =>
                ingredient ? handleTotalIngredient(ingredient) : ""
              }
            >
              Adicionar
            </button>
          </div>
        </div>

        <div className="ingredients">
          {totalIngredients.map((ingredient, index) => (
            <div key={index}>
              <p>{ingredient}</p>
              <img
                src={ImageDelete}
                alt="Del"
                title="Deletar ingrediente"
                onClick={() => filterIngredients(ingredient)}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="send_recipe">
        <button>Criar nova receita</button>
      </section>

      <Footer />
    </Main>
  );
}
