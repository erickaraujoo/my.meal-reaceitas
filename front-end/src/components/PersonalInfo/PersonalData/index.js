import React from "react";

import { Section } from "./styles";

import ImageEmail from "./../../../assets/edit_profile/email.png";
import ImageNickName from "./../../../assets/edit_profile/nickname.png";
import ImagePassword from "./../../../assets/edit_profile/password.png";
import ImagePhone from "./../../../assets/edit_profile/phone.png";

export default function PersonalData() {
  return (
    <Section>
      <form action="">
        <div className="personal_data">
          <div className="container_input">
            <label htmlFor="email">
              <img src={ImageEmail} alt="" />
              E-mail
            </label>
            <input id="email" placeholder="Digite um novo e-mail" />
          </div>
          <div className="container_input">
            <label htmlFor="phone">
              <img src={ImagePhone} alt="" />
              Telefone
            </label>
            <input id="phone" placeholder="Digite um novo telefone" />
          </div>
          <div className="container_input">
            <label htmlFor="nickname">
              <img src={ImageNickName} alt="" />
              Nickname
            </label>
            <input id="nickname" placeholder="Digite um novo nickname" />
          </div>
          <div className="container_input">
            <label htmlFor="password">
              <img src={ImagePassword} alt="" />
              Senha
            </label>
            <input id="password" placeholder="Digite uma nova senha" />
          </div>
          <div className="container_input">
            <label htmlFor="confirm_password">
              <img src={ImagePassword} alt="" />
              Confirmar Senha
            </label>
            <input id="confirm_password" placeholder="Confirme sua nova senha" />
          </div>
        </div>

        <button type="submit" className="submit">
          <span>EDITAR DADOS</span>
        </button>
      </form>
    </Section>
  );
}
