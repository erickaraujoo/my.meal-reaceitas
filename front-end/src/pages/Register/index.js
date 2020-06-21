import React from 'react';
import { useHistory } from 'react-router-dom';

import { Main, GlobalStyle } from './styles';

import ImageArrowLeft from './../../assets/login/arrow_right.png';

export default function Register() {

    const history = useHistory();

    const handlePageLogin = () => history.push(`/login`);

    return (
        <>
            <GlobalStyle />
            <Main>
                <section className="section_login">
                    <div className="title">
                        <h3>Faça seu cadastro abaixo</h3>
                    </div>

                    <form action="">
                        <div className="form_name">
                            <input type="text" name="" id="" placeholder="Nome" />
                        </div>
                        <div className="form_email">
                            <input type="text" name="" id="" placeholder="Email" />
                        </div>
                        <div className="form_password">
                            <input type="password" name="" id="" placeholder="Senha" />
                        </div>
                        <div className="form_password">
                            <input type="password" name="" id="" placeholder="Confirmar Senha" />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>

                    <div className="back" onClick={() => handlePageLogin()}>
                        <img src={ImageArrowLeft} alt=""/>
                        <p>Voltar</p>
                    </div>
                </section>

                <section className="section_help">
                    <p className="privacy_policy">Política de Privacidade</p>   
                </section>
            </Main>
        </>
    );  
};


