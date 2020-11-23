import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const { user } = useSelector((state) => state.user.data);

  return (
    <Section>
      <div className="section_personal_information">
        <div className="title">
          <h3>Informações Pessoais</h3>
          <Link
            to={{
              pathname: ":id/informacoes-pessoais",
              source: history.location.pathname,
            }}
          >
            <img src={ImageEdit} alt="Edit" />
          </Link>
        </div>

        <ol>
          <li>
            <img src={ImageEmail} alt="email" />
            <p> {user?.email ? user?.email : "Sem e-mail particular para exibir"} </p>
          </li>
          <li>
            <img src={ImagePhone} alt="phone" />
            <p>
              {user?.telefone
                ? user.telefone
                : "Sem telefone"}
            </p>
          </li>
          <li>
            <img src={ImageNickName} alt="nickname" />
            <p> {user?.username ? user?.username : "Sem nickname para exibir"} </p>
          </li>
          <li>
            <img src={ImagePassword} alt="password" />
            <p>
              {user?.password ? user.password.replace(
                user.password,
                "*".repeat(user.password.length)
              ) : "Nenhuma senha para exibir"}
            </p>
          </li>
        </ol>
      </div>

      <div className="section_perfil">
        <div className="title">
          <h3>Informações do Perfíl</h3>
          <Link
            to={{
              pathname: ":id/informacoes-perfil",
              source: history.location.pathname,
            }}
          >
            <img src={ImageEdit} alt="Edit" />
          </Link>
        </div>

        <ol>
          <li>
            <img src={ImageName} alt="name" />
            <p>{user?.nome ? user?.nome : "Sem nome para exibir"}</p>
          </li>
          <li className="li_description">
            <div className="title">
              <img src={ImageDescription} alt="description" />
              <p>Biografia</p>
            </div>

            <div className="description">
              <textarea
                defaultValue={user?.biografia ? user?.biografia : "Sem biografia para exibir"}
                readOnly
              ></textarea>
            </div>
          </li>
        </ol>
      </div>
    </Section>
  );
}
