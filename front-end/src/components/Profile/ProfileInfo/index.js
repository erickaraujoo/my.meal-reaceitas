import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Section } from "./styles";

import ImageEdit from "./../../../assets/profile/edit.png";
import ImageEmail from "./../../../assets/profile/mail.png";
import ImageName from "./../../../assets/profile/name.png";
import ImageNickName from "./../../../assets/profile/nickname.png";
import ImagePassword from "./../../../assets/profile/password.png";
import ImagePhone from "./../../../assets/profile/phone.png";
import ImageDescription from "./../../../assets/profile/description.png";

export default function ProfileInfo() {
  const history = useHistory();
  return (
    <Section>
      <div className="section_personal_information">
        <div className="title">
          <h3>Informações Pessoais</h3>
          <Link to={{ pathname: ':id/informacoes-pessoais', source: history.location.pathname }}>
            <img src={ImageEdit} alt="Edit" />
          </Link>
        </div>

        <ol>
          <li>
            <img src={ImageEmail} alt="email" />
            <p>araujo.erick2002@gmail.com</p>
          </li>
          <li>
            <img src={ImagePhone} alt="phone" />
            <p>(11) 49821-2211</p>
          </li>
          <li>
            <img src={ImageNickName} alt="nickname" />
            <p>@erick_araujo</p>
          </li>
          <li>
            <img src={ImagePassword} alt="password" />
            <p>********</p>
          </li>
        </ol>
      </div>

      <div className="section_perfil">
        <div className="title">
          <h3>Informações do Perfíl</h3>
          <Link to={{ pathname: ':id/informacoes-perfil', source: history.location.pathname }}>
            <img src={ImageEdit} alt="Edit" />
          </Link>
        </div>

        <ol>
          <li>
            <img src={ImageName} alt="name" />
            <p>Erick Araujo Barbosa</p>
          </li>
          <li className="li_description">
            <div className="title">
              <img src={ImageDescription} alt="description" />
              <p>Biografia</p>
            </div>

            <div className="description">
              <textarea name="" id="" readOnly>
                Olá, meu nome é Erick Araujo, tenho nº anos e gosto muito de
                culinária, venho ganhando conhecimnento na cozinha desde os meus
                10 anos
              </textarea>
            </div>
          </li>
        </ol>
      </div>
    </Section>
  );
}
