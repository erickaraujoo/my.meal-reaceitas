import React, { useState, useEffect, lazy } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from 'lodash';

import { InputSearchRecipe } from "./../../components/Input";
import { fetchRecipes } from "./../../store/modules/recipes/actions";

import ImageCategory from "./../../assets/category.png";
import ImageForKnife from "./../../assets/fork_knife.png";
import ImageFast from "./../../assets/fast.png";
import ImagePhotograph from "./../../assets/photograph.png";
import ImageVideo from "./../../assets/video.png";
import ImageNovelty from "./../../assets/novidade2.png";

import {
  Main,
  FilterByIngredient,
  OrderBy,
  ContainerCards,
  Category,
  ImageRecipe,
} from "./styles";

function Recipes() {

  const dispatch = useDispatch();

  const ListRecipes = lazy(() => import("./../../components/Recipes/ListRecipes"));
  const Footer = lazy(() => import("./../../components/Footer"));

  const recipes = useSelector((state) => state.recipes);

  const [heightCategory, setHeightCategory] = useState(0);
  const [totalRecipes, setTotalRecipes] = useState(0);

  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search");

  useEffect(debounce(() => {
    const cardCategory = document.getElementById("card-category");
    const title = cardCategory.querySelector("div");
    const ol = cardCategory.querySelector("ol");

    setHeightCategory(title.offsetHeight + ol.offsetHeight);
  }, 100), []);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    recipes.data.totalElements
      ? setTotalRecipes(recipes.data.totalElements)
      : setTotalRecipes(0);
  }, [recipes.data.totalElements]);

  return (
    <>
      <Main>
        <div className="blue_background"></div>

        {search && <h1>Você pesquisou por: {search} </h1>}
        <p className="pTotal-recipes">
          Foram encontrados {totalRecipes} receitas
        </p>

        <section className="section-data-classification">
          <div className="content-wrap">
            <FilterByIngredient className="filter-ingredients">
              <img
                src="https://cdn.dogsplanet.com/wp-content/plugins/dogsplanet/public/img/filter-icon.png"
                alt="Filtro"
              />
              <p>Filtrar por ingrediente</p>
            </FilterByIngredient>

            <OrderBy className="order-by">
              <p>Ordenar por:</p>
              <select>
                <option>Selecionar</option>
              </select>
            </OrderBy>

            <InputSearchRecipe
              width={100}
              height={45}
              type={"text"}
              placeholder={"Pesquisar..."}
            />
          </div>
        </section>

        <ContainerCards className="section-category-cards">
          <div className="content-wrap">
            <Category id="card-category" height={heightCategory}>
              <div id="titleCategory">
                <img src={ImageCategory} alt="Categoria" />
                <p>Categorias</p>
              </div>

              <ol className="list-category">
                <li>
                  <img src={ImageForKnife} alt="All" />
                  Todas as Receitas
                </li>
                <li>
                  <img src={ImageFast} alt="Fast" />
                  Rápidas
                </li>
                <li>
                  <img src={ImagePhotograph} alt="Photograpy" />
                  Com Foto
                </li>
                <li>
                  <img src={ImageVideo} alt="Video" />
                  Com Vídeo
                </li>
                <li>
                  <img src={ImageNovelty} alt="Novelty" />
                  Novidades
                </li>
              </ol>
            </Category>

            <div className="card-container">
              <ListRecipes
                recipes={recipes.data.content}
                loading={recipes.loading}
                error={recipes.error}
                ImageRecipe={ImageRecipe}
              />
            </div>
          </div>
        </ContainerCards>
      </Main>
      <Footer />
    </>
  );
}

export default Recipes;
