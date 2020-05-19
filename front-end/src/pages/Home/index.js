import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from './../../components/Header'
import Footer from './../../components/Footer'

import { 
    Container, 
    ImageBackgroundModal, 
    SectionSearch, 
    SectionCategory, 
    SectionModalRecipes, 
    SectionIngredients,
    SectionFeedback
} from './styles';

import ImageBeef from './../../assets/home/icons/beef.png';
import ImageCake from './../../assets/home/icons/cake.png';
import ImageDrink from './../../assets/home/icons/drink.png';
import ImageFish from './../../assets/home/icons/fish.png';
import ImagePasta from './../../assets/home/icons/pasta.png';
import ImageSalad from './../../assets/home/icons/salad.png';
import ImageArrowRight from './../../assets/home/icons/arrow_right.png';
import ImageArrowRightBrown from './../../assets/home/icons/arrow_right2.png';
import ImageCooking from './../../assets/home/cooking.png';
import ImageSave from './../../assets/home/icons/save.png';
import Cake from './../../assets/home/cake.png';

export default function Home() {

    const [customHeader, setCustomHeader] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const history = useHistory();

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) setCustomHeader(true);
        else setCustomHeader(false);
    }

    const handlePageRecipe = () => history.push(`/recipes?search=${inputValue}`);

    return (
        <>
            <Header customHeader={customHeader} />

            <Container id="main">
                <SectionSearch>
                    <div className="bg_image"></div>

                    <h2> ENCONTRE A RECEITA PERFEITA PARA SUA REFEIÇÃO </h2>

                    <div className="search_recipe">
                        <input placeholder="Procure alguma receita..." 
                            value={inputValue} 
                            onChange={ e => setInputValue(e.target.value) }
                        />

                        <button onClick={() => handlePageRecipe }>Buscar agora!</button>
                    </div>
                </SectionSearch>

                <SectionCategory>
                    <h2>CATEGORIAS</h2>

                    <p className="subtitle">
                        Você possui alguma categoria específica para suas receitas? Busque agora mesmo!
                    </p>

                    <div className="hr_default"> <hr/> <hr/> </div>

                    <ul className="list_category">
                        <li>
                            <div className="image_category"> <img src={ImageBeef} alt="Carnes"/> </div>
                            <div className="text_category"> <p>CARNES</p> </div>
                        </li>
                        <li>
                            <div className="image_category"> <img src={ImageFish} alt="Peixes"/> </div>
                            <div className="text_category"> <p>PEIXES</p> </div>
                        </li>
                        <li>
                            <div className="image_category"> <img src={ImageDrink} alt="Bebidas"/> </div>
                            <div className="text_category"> <p>BEBIDAS</p> </div>
                        </li>
                        <li>
                            <div className="image_category"> <img src={ImagePasta} alt="Massas"/> </div>
                            <div className="text_category"> <p>MASSAS</p> </div>
                        </li>
                        <li>
                            <div className="image_category"> <img src={ImageCake} alt="Sobremesas"/> </div>
                            <div className="text_category"> <p>SOBREMESAS</p> </div>
                        </li>
                        <li>
                            <div className="image_category"> <img src={ImageSalad} alt="Saudáveis"/> </div>
                            <div className="text_category"> <p>SAUDÁVEIS</p> </div>
                        </li>
                    </ul>
                    
                    <div className="hr_default"> <hr/> <hr/> </div>
                </SectionCategory>

                <section className="section_title_recipes">
                    <hr/> <h2>ALGUMAS RECEITAS QUE SELECIONAMOS PARA VOCÊ</h2> <hr/>
                </section>

                <SectionModalRecipes>
                    <div className="title_recipes">
                        <h2>Tendências</h2>
                        <img src={ImageArrowRight} alt=""/>
                    </div>

                    <div className="trending_recipes">
                        <ul>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </SectionModalRecipes>

                <hr className="hr_section"/>

                <SectionModalRecipes>
                    <div className="title_recipes">
                        <h2>Recentes</h2>
                        <img src={ImageArrowRight} alt=""/>
                    </div>

                    <div className="recents_recipes">
                        <ul>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>10/04/2020</p> </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>10/04/2020</p> </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>10/04/2020</p> </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>10/04/2020</p> </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </SectionModalRecipes>
                
                <hr className="hr_section"/>

                <SectionModalRecipes>
                    <div className="title_recipes">
                        <h2>Mais Vistos</h2>
                        <img src={ImageArrowRight} alt=""/>
                    </div>

                    <div className="populars_recipes">
                        <ul>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>155.920 Views</p> </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>155.920 Views</p> </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>155.920 Views</p> </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal_recipe">
                                    <ImageBackgroundModal background={Cake} />

                                    <img src={ImageSave} alt="Salvar"/>

                                    <p className="title_recipe">Bolo de Chocolate</p>

                                    <div className="views_recipe"> <hr/> <p>155.920 Views</p> </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </SectionModalRecipes>

                <SectionIngredients>

                    <div className="hr_decoration"> <hr/> </div>

                    <div className="flex">
                        <div className="content_ingredients">
                            <h2>PARA FACILITAR SUA VIDA!</h2>

                            <p className="subtitle">
                                Cansado de buscar receitas por nome? Que tal encontrar receitas com os 
                                ingredientes que você deseja?
                            </p>

                            <button> Buscar agora mesmo! <img src={ImageArrowRightBrown} alt=""/> </button>

                            <div className="hr_decoration_bottom"> <hr/> </div>
                        </div>

                        <div className="image_ingredients"> <img src={ImageCooking} alt=""/> </div>
                    </div>
                </SectionIngredients>

                <SectionFeedback>
                    <h2>ENTRE EM CONTATO CONOSCO</h2>

                    <p className="subtitle">Tire suas dúvidas mandando uma mensagem</p>

                    <form>
                        <div className="container_form">
                            <div className="inputs_form">
                                <input placeholder="Seu Nome"/>
                                <input placeholder="Seu Email"/>
                                <input placeholder="Seu Telefone"/>
                            </div>
                            <div className="textarea_form"> 
                                <textarea name="" id="" cols="30" rows="10" placeholder="Sua Mensagem"></textarea>
                            </div>
                        </div>

                        <button type="submit">MANDAR MENSAGEM</button>
                    </form>
                </SectionFeedback>
            </Container>

            <Footer />
        </>
    );
}