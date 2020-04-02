import React from 'react';

import Header from './../../components/Header'

import ImageCategory from './../../images/category.png';
import ImageForKnife from './../../images/fork_knife.png';
import ImageFast from './../../images/fast.png';
import ImagePhotograph from './../../images/photograph.png';
import ImageVideo from './../../images/video.png';
import ImageNovelty from './../../images/novidade2.png';
  
// SEMANTIC UI
import 'semantic-ui-css/semantic.min.css';

import { Main, TotalRecipes, InputSearch, FilterByIngredient, OrderBy, ContainerCards, Category, ListCategory } from './styles';

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

                    <InputSearch>
                        <input type="text" placeholder="Search..." />
                        <button>
                            <i aria-hidden="true" class="search icon"></i>
                        </button>
                    </InputSearch>

                    <ContainerCards>
                        <Category>
                            <div id="titleCategory">
                                <img src={ ImageCategory } alt="Categoria" />
                                <h3>Categorias</h3>
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
                    </ContainerCards>
            </Main>
        </>
    )
}

export default Recipes;