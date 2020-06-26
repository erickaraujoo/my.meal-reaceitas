import React from "react";
import { useHistory } from "react-router-dom";

import { Main, GlobalStyle } from "./styles";

import ImageArrowLeft from "./../../assets/login/arrow_right.png";

export default function Login() {
  const history = useHistory();

  const handlePageRegister = () => history.push(`/cadastrar`);
  const handlePageHome = () => history.push(`/`);

  return (
    <>
      <GlobalStyle />
      <Main>
        <section
          className="section_backToHome"
          onClick={() => handlePageHome()}
        >
          <img src={ImageArrowLeft} alt="Voltar" />
          <p>Voltar à Página Inicial</p>
        </section>

        <section className="section_login">
          <div className="title_company">
            <div></div>
            <h3>MEAL RECEITAS</h3>
          </div>

          <p className="subtitle">Faça login com sua conta</p>

          <form action="">
            <div className="form_email">
              <input type="text" name="" id="" placeholder="Email" />
            </div>
            <div className="form_password">
              <input type="password" name="" id="" placeholder="Senha" />
            </div>
            <button type="submit">Login</button>
          </form>

          <div className="register" onClick={() => handlePageRegister()}>
            <p>Se cadastrar</p>
            <img src={ImageArrowLeft} alt="" />
          </div>
        </section>

        <section className="section_help">
          <p className="help">Não consegue fazer o Login?</p>
          <p className="privacy_policy">Política de Privacidade</p>
        </section>
      </Main>
    </>
  );
}
