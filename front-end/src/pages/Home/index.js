import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import HeaderHome from "./../../components/HeaderHome";

import Search from "./../../components/Home/Search";
import Category from "./../../components/Home/Category";
import Recipes from "./../../components/Home/Recipes";

import FiltersProvider from "./../../context/Recipes/Filters";

import {
  Container,
} from "./styles";

export default function Home() {
  const [setCustomHeader] = useState(false);
  // const [inputValue] = useState("");
  // const history = useHistory();

  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    )
      setCustomHeader(true);
    else setCustomHeader(false);
  };

  // const handlePageRecipe = () => history.push(`/recipes?search=${inputValue}`);

  return (
    <>
      <HeaderHome />

      <Container id="main">
        <Search />

        <FiltersProvider>
          <Category />
        </FiltersProvider>

        <Recipes />

        {/* <section className="section_title_recipes">
          <hr /> <h2>ALGUMAS RECEITAS QUE SELECIONAMOS PARA VOCÊ</h2> <hr />
        </section> */}

        {/* <SectionModalRecipes>
          <div className="title_recipes">
            <h2>Tendências</h2>
            <img src={ImageArrowRight} alt="" />
          </div>

          <div className="trending_recipes">
            <ul>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>
                </div>
              </li>
            </ul>
          </div>
        </SectionModalRecipes>

        <hr className="hr_section" /> */}

        {/* <SectionModalRecipes>
          <div className="title_recipes">
            <h2>Recentes</h2>
            <img src={ImageArrowRight} alt="" />
          </div>

          <div className="recents_recipes">
            <ul>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>10/04/2020</p>{" "}
                  </div>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>10/04/2020</p>{" "}
                  </div>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>10/04/2020</p>{" "}
                  </div>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>10/04/2020</p>{" "}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </SectionModalRecipes> */}

        {/* <hr className="hr_section" />

        <SectionModalRecipes>
          <div className="title_recipes">
            <h2>Mais Vistos</h2>
            <img src={ImageArrowRight} alt="" />
          </div>

          <div className="populars_recipes">
            <ul>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>155.920 Views</p>{" "}
                  </div>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>155.920 Views</p>{" "}
                  </div>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>155.920 Views</p>{" "}
                  </div>
                </div>
              </li>
              <li>
                <div className="modal_recipe">
                  <ImageBackgroundModal background={Cake} />

                  <img src={ImageSave} alt="Salvar" />

                  <p className="title_recipe">Bolo de Chocolate</p>

                  <div className="views_recipe">
                    {" "}
                    <hr /> <p>155.920 Views</p>{" "}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </SectionModalRecipes> */}

        {/* <SectionIngredients>
          <div className="flex">
            <div className="content_ingredients">
              <h2>PARA FACILITAR SUA VIDA!</h2>

              <p className="subtitle">
                Cansado de buscar receitas por nome? Que tal encontrar receitas
                com os ingredientes que você deseja?
              </p>

              <button>
                Buscar agora mesmo! <img
                  src={ImageArrowRightRed}
                  alt=""
                />
              </button>
                <hr />
              </div>
            </div>

            <div className="image_ingredients">
              <img src={ImageCooking} alt="" />
            </div>
          </div>
        </SectionIngredients> */}

        {/* <SectionFeedback>
          <h2>ENTRE EM CONTATO CONOSCO</h2>

          <p className="subtitle">Tire suas dúvidas mandando uma mensagem</p>

          <form>
            <div className="container_form">
              <div className="inputs_form">
                <input placeholder="Seu Nome" />
                <input placeholder="Seu Email" />
                <input placeholder="Seu Telefone" />
              </div>
              <div className="textarea_form">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Sua Mensagem"
                ></textarea>
              </div>
            </div>

            <button type="submit">MANDAR MENSAGEM</button>
          </form>
        </SectionFeedback> */}
      </Container>

      {/* <Footer /> */}
    </>
  );
}
