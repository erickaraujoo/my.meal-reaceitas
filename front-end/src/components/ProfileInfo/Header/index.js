import React from "react";
import { Link, useHistory } from "react-router-dom";

import ImageArrowBack from "./../../../assets/arrow_back.png";
import ImageProfileInfo from "./../../../assets/edit_profile/profile_info.png";

import { Section } from "./styles";

export default function Header() {
  const history = useHistory();
  return (
    <Section>
      <div className="background">
        <Link to={{ pathname: history.location.source || "/" }}>
          <div className="back">
            <img src={ImageArrowBack} alt="" />
            <p>Voltar</p>
          </div>
        </Link>
      </div>
      
      <div className="header">
        <img src={ImageProfileInfo} alt=""/>
        <h2>Edite as informações do seu Perfil</h2>
      </div>
    </Section>
  );
}
