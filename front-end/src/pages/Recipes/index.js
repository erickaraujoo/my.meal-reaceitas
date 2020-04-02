import React from 'react';

import Header from './../../components/Header'

import ImageCategory from './../../assets/category.png';
import ImageForKnife from './../../assets/fork_knife.png';
import ImageFast from './../../assets/fast.png';
import ImagePhotograph from './../../assets/photograph.png';
import ImageVideo from './../../assets/video.png';
import ImageNovelty from './../../assets/novidade2.png';
import ImageSearch from './../../assets/search.png';
import ImageHeart from './../../assets/heart_blue.png';
  
import { InputSearch } from './../../styles';
import { Main, TotalRecipes, FilterByIngredient, OrderBy, ContainerCards, Category, ListCategory } from './styles';

function Recipes() {

    return(
        <>
            <Header />

            <Main>
                <h1>Você pesquisou por: Bolo de Fubá</h1>
                <TotalRecipes>Foram encontrados 1.152 receitas</TotalRecipes>

                    <FilterByIngredient>
                        <img src="https://cdn.dogsplanet.com/wp-content/plugins/dogsplanet/public/img/filter-icon.png" alt="Filtro" />
                        <p>Filtrar por ingrediente</p>
                    </FilterByIngredient>

                    <OrderBy>
                        <p>Ordenar por:</p>
                        <select>
                            <option>Selecionar</option>
                        </select>
                    </OrderBy>

                    <InputSearch width={100}>
                        <input type="text" placeholder="Search..." />
                        <button>
                            <img src={ImageSearch} alt="Pesquisar"/>
                        </button>
                    </InputSearch>

                    <ContainerCards>
                        <Category>
                            <div id="titleCategory">
                                <img src={ ImageCategory } alt="Categoria" />
                                <p>Categorias</p>
                            </div>

                            <ListCategory>
                                <li>
                                    <img src={ ImageForKnife } alt="All" />
                                    Todas as Receitas
                                </li>
                                <li>
                                    <img src={ ImageFast } alt="Fast" />
                                    Rápidas
                                </li>
                                <li>
                                    <img src={ ImagePhotograph } alt="Photograpy" />
                                    Com Foto
                                </li>
                                <li>
                                    <img src={ ImageVideo } alt="Video"/>
                                    Com Vídeo
                                </li>
                                <li>
                                    <img src={ImageNovelty} alt="Novelty" />
                                    Novidades
                                </li>
                            </ListCategory>
                        </Category>

                        <div class="card-recipes">
                            <ol className="card-container">
                                <li>
                                    <div>
                                        <img className="imgRecipe" src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="Bolo de fubá"/>
                                    </div>

                                    <div className="data-recipe">
                                        <strong>Bolo de fubá</strong>
                                        <p className="author">Por: Erick Araujo</p>

                                        <p className="description">
                                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                    </div>

                                    <div className="info-recipe">

                                        <div>
                                            <img src={ImageHeart} alt="Favoritos"/>
                                            213 pessoas
                                        </div>

                                        <div className="access-info">
                                            <strong>1.152</strong> acessos
                                        </div>

                                        <div className="date-info">
                                            Data de publicação: 
                                            <strong> 25/03/2020 </strong>
                                        </div>

                                        <div className="avaliation-info">
                                            Avaliação: 
                                            <p className="note-avaliation"> 8,9 </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img className="imgRecipe" src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="Bolo de fubá"/>
                                    </div>

                                    <div className="data-recipe">
                                        <strong>Bolo de fubá</strong>
                                        <p className="author">Por: Erick Araujo</p>

                                        <p className="description">
                                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                    </div>

                                    <div className="info-recipe">

                                        <div>
                                            <img src={ImageHeart} alt="Favoritos"/>
                                            213 pessoas
                                        </div>

                                        <div className="access-info">
                                            <strong>1.152</strong> acessos
                                        </div>

                                        <div className="date-info">
                                            Data de publicação: 
                                            <strong> 25/03/2020 </strong>
                                        </div>

                                        <div className="avaliation-info">
                                            Avaliação: 
                                            <p className="note-avaliation"> 8,9 </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img className="imgRecipe" src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="Bolo de fubá"/>
                                    </div>

                                    <div className="data-recipe">
                                        <strong>Bolo de fubá</strong>
                                        <p className="author">Por: Erick Araujo</p>

                                        <p className="description">
                                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                    </div>

                                    <div className="info-recipe">

                                        <div>
                                            <img src={ImageHeart} alt="Favoritos"/>
                                            213 pessoas
                                        </div>

                                        <div className="access-info">
                                            <strong>1.152</strong> acessos
                                        </div>

                                        <div className="date-info">
                                            Data de publicação: 
                                            <strong> 25/03/2020 </strong>
                                        </div>

                                        <div className="avaliation-info">
                                            Avaliação: 
                                            <p className="note-avaliation"> 8,9 </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img className="imgRecipe" src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="Bolo de fubá"/>
                                    </div>

                                    <div className="data-recipe">
                                        <strong>Bolo de fubá</strong>
                                        <p className="author">Por: Erick Araujo</p>

                                        <p className="description">
                                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                    </div>

                                    <div className="info-recipe">

                                        <div>
                                            <img src={ImageHeart} alt="Favoritos"/>
                                            213 pessoas
                                        </div>

                                        <div className="access-info">
                                            <strong>1.152</strong> acessos
                                        </div>

                                        <div className="date-info">
                                            Data de publicação: 
                                            <strong> 25/03/2020 </strong>
                                        </div>

                                        <div className="avaliation-info">
                                            Avaliação: 
                                            <p className="note-avaliation"> 8,9 </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img className="imgRecipe" src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="Bolo de fubá"/>
                                    </div>

                                    <div className="data-recipe">
                                        <strong>Bolo de fubá</strong>
                                        <p className="author">Por: Erick Araujo</p>

                                        <p className="description">
                                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                    </div>

                                    <div className="info-recipe">

                                        <div>
                                            <img src={ImageHeart} alt="Favoritos"/>
                                            213 pessoas
                                        </div>

                                        <div className="access-info">
                                            <strong>1.152</strong> acessos
                                        </div>

                                        <div className="date-info">
                                            Data de publicação: 
                                            <strong> 25/03/2020 </strong>
                                        </div>

                                        <div className="avaliation-info">
                                            Avaliação: 
                                            <p className="note-avaliation"> 8,9 </p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </ContainerCards>
            </Main>
        </>
    )
}

export default Recipes;