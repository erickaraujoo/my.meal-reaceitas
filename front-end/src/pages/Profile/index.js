import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Main } from './styles';

import ImagePremium from './../../assets/profile/premium.png';
import ImageEdit from './../../assets/profile/edit.png';
import ImageEmail from './../../assets/profile/mail.png';
import ImageName from './../../assets/profile/name.png';
import ImageNickName from './../../assets/profile/nickname.png';
import ImagePassword from './../../assets/profile/password.png';
import ImagePhone from './../../assets/profile/phone.png';
import ImageDescription from './../../assets/profile/description.png';
import ImageAddRecipe from './../../assets/profile/add.png';
import ImageClose from './../../assets/profile/close.png';

export default function Profile() {

    const history = useHistory();

    // const handlePageNewRecipe = history.push();

    return (
        <Main>

            <div className="blue_background"></div>

            <section className="section_header">
                <div className="background"></div>
                <div className="main_info">
                    <div className="image_profile">
                        <img src="https://trello-members.s3.amazonaws.com/5e3085f91594358482af820c/cd418de21c46559e868264879206f3af/170.png" alt=""/>
                    </div>

                    <h2>Erick Araujo Barbosa</h2>

                    <div className="premium_member">
                        <img src={ImagePremium} alt=""/>
                        <p>Premium</p>
                    </div>
                </div>
            </section>

            <section className="section_info">
                <div className="section_personal_information">
                    <div className="title">
                        <h3>Informações Pessoais</h3>
                        <img src={ImageEdit} alt="Edit"/>
                    </div>

                    <ol>
                        <li>
                            <img src={ImageEmail} alt="email"/>
                            <p>araujo.erick2002@gmail.com</p>
                        </li>
                        <li>
                            <img src={ImagePhone} alt="phone"/>
                            <p>(11) 49821-2211</p>
                        </li>
                        <li>
                            <img src={ImageNickName} alt="nickname"/>
                            <p>@erick_araujo</p>
                        </li>
                        <li>
                            <img src={ImagePassword} alt="password"/>
                            <p>********</p>
                        </li>
                    </ol>
                </div>

                <div className="section_perfil">
                    <div className="title">
                        <h3>Informações do Perfíl</h3>
                        <img src={ImageEdit} alt="Edit"/>
                    </div>

                    <ol>
                        <li>
                            <img src={ImageName} alt="name"/>
                            <p>Erick Araujo Barbosa</p>
                        </li>   
                        <li className="li_description">
                            <div className="title">
                                <img src={ImageDescription} alt="description"/>
                                <p>Biografia</p>
                            </div>

                            <div className="description">
                                <textarea name="" id="" readOnly>
                                    Olá, meu nome é Erick Araujo, tenho nº anos e gosto muito de culinária, 
                                    venho ganhando conhecimnento na cozinha desde os meus 10 anos
                                </textarea>
                            </div>
                        </li>   
                    </ol>
                </div>
            </section>

            <section className="section_recipes">
                <div className="title">
                    <h3>Suas Receitas</h3>
                    <Link to={`15918228030309494/recipe/create`}>
                        <img src={ImageAddRecipe} alt="add"/>   
                    </Link>
                </div>

                <ul>
                    <li>
                        <div className="image">
                            <img src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="recipe"/>
                        </div>
                        <p className="name">Bolo de Fubá</p>
                        <p className="date">24/05/2020</p>
                        <p className="hits">152 acessos</p>
                        <p className="favorites">15 favoritos</p>
                        <div className="options">
                            <img className="edit" src={ImageEdit} alt="edit"/>
                            <img className="delete" src={ImageClose} alt="delete"/>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="recipe"/>
                        </div>
                        <p className="name">Bolo de Fubá</p>
                        <p className="date">24/05/2020</p>
                        <p className="hits">152 acessos</p>
                        <p className="favorites">15 favoritos</p>
                        <div className="options">
                            <img className="edit" src={ImageEdit} alt="edit"/>
                            <img className="delete" src={ImageClose} alt="delete"/>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="recipe"/>
                        </div>
                        <p className="name">Bolo de Fubá</p>
                        <p className="date">24/05/2020</p>
                        <p className="hits">152 acessos</p>
                        <p className="favorites">15 favoritos</p>
                        <div className="options">
                            <img className="edit" src={ImageEdit} alt="edit"/>
                            <img className="delete" src={ImageClose} alt="delete"/>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="recipe"/>
                        </div>
                        <p className="name">Bolo de Fubá</p>
                        <p className="date">24/05/2020</p>
                        <p className="hits">152 acessos</p>
                        <p className="favorites">15 favoritos</p>
                        <div className="options">
                            <img className="edit" src={ImageEdit} alt="edit"/>
                            <img className="delete" src={ImageClose} alt="delete"/>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="recipe"/>
                        </div>
                        <p className="name">Bolo de Fubá</p>
                        <p className="date">24/05/2020</p>
                        <p className="hits">152 acessos</p>
                        <p className="favorites">15 favoritos</p>
                        <div className="options">
                            <img className="edit" src={ImageEdit} alt="edit"/>
                            <img className="delete" src={ImageClose} alt="delete"/>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="recipe"/>
                        </div>
                        <p className="name">Bolo de Fubá</p>
                        <p className="date">24/05/2020</p>
                        <p className="hits">152 acessos</p>
                        <p className="favorites">15 favoritos</p>
                        <div className="options">
                            <img className="edit" src={ImageEdit} alt="edit"/>
                            <img className="delete" src={ImageClose} alt="delete"/>
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg" alt="recipe"/>
                        </div>
                        <p className="name">Bolo de Fubá</p>
                        <p className="date">24/05/2020</p>
                        <p className="hits">152 acessos</p>
                        <p className="favorites">15 favoritos</p>
                        <div className="options">
                            <img className="edit" src={ImageEdit} alt="edit"/>
                            <img className="delete" src={ImageClose} alt="delete"/>
                        </div>
                    </li>
                </ul>
            </section>
        </Main>
    );
};