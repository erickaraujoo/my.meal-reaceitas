import React from "react";

import { Container } from "./styles.js";

import ImageLogo from "../../assets/logo_white.png";

import ImageFacebook from "./../../assets/footer/facebook.png";
import ImageTwitter from "./../../assets/footer/twitter.png";
import ImageLinkedin from "./../../assets/footer/linkedin.png";

export default function Footer() {
  return (
    <Container>
      <div className="info">
        <div className="logo">
          <img src={ImageLogo} alt="" />
        </div>
        <div className="category">
          <p className="title">Categorias</p>
          <ul>
            <li>
              <p>Café da Manhã</p>
            </li>
            <li>
              <p>Almoço</p>
            </li>
            <li>
              <p>Jantar</p>
            </li>
          </ul>
        </div>
        <div className="create_account">
          <p className="title">Crie sua Conta</p>
          <ul>
            <li>
              <p>Entrar</p>
            </li>
            <li>
              <p>Cadastrar</p>
            </li>
            <li>
              <p>Ajuda</p>
            </li>
          </ul>
        </div>
        <div className="support">
          <p className="title">Suporte</p>
          <ul>
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <p>Termos de Uso</p>
            </li>
            <li>
              <p>Politica de Privacidade</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="text">
          <p> 2020 - © Meal Receitas, Todos os direitos reservados. </p>
        </div>
        <div className="social_networks">
          <img src={ImageFacebook} alt="" />
          <img src={ImageTwitter} alt="" />
          <img src={ImageLinkedin} alt="" />
        </div>
      </div>
    </Container>
  );
}
