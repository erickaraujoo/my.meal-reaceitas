import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import api from "./../../services/api";

import { fetchRecipes } from './../../store/modules/recipes/actions';

// import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import ImageCategory from "./../../assets/category.png";
import ImageForKnife from "./../../assets/fork_knife.png";
import ImageFast from "./../../assets/fast.png";
import ImagePhotograph from "./../../assets/photograph.png";
import ImageVideo from "./../../assets/video.png";
import ImageNovelty from "./../../assets/novidade2.png";
import ImageSearch from "./../../assets/search.png";
import ImageHeart from "./../../assets/heart_blue.png";
import ImageReport from "./../../assets/recipe_icon.png";

import { InputSearch } from "./../../styles";
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

  const listRecipes = useSelector(state => state);

  console.log(listRecipes);

  const [heightCategory, setHeightCategory] = useState(0);
  const [textSearch, setTextSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(0);

  // Consumindo os parâmetros da URL
  let query = new URLSearchParams(useLocation().search);
  let search = query.get("search");

  const history = useHistory();

  function handleSearchRecipes() {
    history.push(`?search=${textSearch}`);
    setTextSearch("");
  }

  useEffect(() => {
    const cardCategory = document.getElementById("card-category");
    const title = cardCategory.querySelector("div");
    const ol = cardCategory.querySelector("ol");

    setHeightCategory(title.offsetHeight + ol.offsetHeight);
  }, []);

  useEffect(() => {
    dispatch(fetchRecipes())
  }, []);

  // useEffect(() => {
  //   const handleRecipes = async () => {
  //     try {
  //       const { data } = await api.get("receitas?page=0");

  //       setTotalRecipes(data.totalElements);

  //       data.content.forEach((recipe) => {
  //         setRecipes((arrayRecipes) => [
  //           ...arrayRecipes,
  //           {
  //             id_recipe: recipe.id_receita,
  //             title: recipe.nome,
  //             image: recipe.imagem,
  //             description: recipe.descricao,
  //             method_preparation: recipe.modo_preparo,
  //             yield: recipe.rendimento,
  //             preparation_time: recipe.tempo_preparo,
  //             obs: recipe.observacao,
  //             ingredients: recipe.ingredientes,
  //             user: recipe.usuario,
  //           },
  //         ]);
  //       });
  //     } catch (err) { console.log(err) };
  //   };

  //   handleRecipes();
  // }, []);

  return (
    <>
      <Main>
        <div className="blue_background"></div>

        { search && <h1>Você pesquisou por: { search } </h1> } 
        <p className="pTotal-recipes">Foram encontrados { totalRecipes } receitas</p>

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

            <InputSearch
              width={100}
              className="input-search"
              style={{ height: "45px" }}
            >
              <input
                placeholder="Search..."
                value={textSearch}
                onChange={(e) => setTextSearch(e.target.value)}
                // O mesmo serve para a tecla 'enter'
                onKeyPress={(e) =>
                  e.which === 13 ? handleSearchRecipes() : ""
                }
              />
              <button onClick={handleSearchRecipes}>
                <img src={ImageSearch} alt="Pesquisar" />
              </button>
            </InputSearch>
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
              <ol className="list-recipes">
                {recipes.map((recipe, index) => (
                  <li key={index}>
                    { index === 0 ? (
                      <div className="best-recipe">
                        <img src={ImageReport} alt="Best" />
                        <p>Esta é a receita que você esta procurando!</p>
                      </div>
                    ) : ('')}
                    <div className="image-recipe">
                      <ImageRecipe background={ recipe.image }
                      />
                    </div>

                    <div className="data-recipe">
                      <strong> { recipe.title } </strong>
                      <p className="author">Por: { recipe.user.nome } </p>

                      <p className="description"> 
                        { recipe.description ? recipe.description : 'Sem descrição' } 
                      </p>
                    </div>

                    <div className="info-recipe">
                      <div className="favorite-info">
                        <img src={ImageHeart} alt="Favoritos" />
                        <p>
                          <span> 213 </span> pessoas
                        </p>
                      </div>

                      <div className="access-info">
                        <strong>1.152</strong> acessos
                      </div>

                      <div className="date-info">
                        <p>Data de Publicação:</p>
                        <p> 25/03/2020 </p>
                      </div>

                      <div className="avaliation-info">
                        Avaliação:
                        <p className="note-avaliation"> 8,9 </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </ContainerCards>
      </Main>
      <Footer />
    </>
  );
}

export default Recipes;
