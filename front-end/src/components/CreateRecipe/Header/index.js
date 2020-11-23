import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Section } from "./styles";

import ImagePremium from "./../../../assets/profile/premium.png";
import ImageArrowBack from "./../../../assets/arrow_back.png";

export default function Header() {
  const history = useHistory();
  return (
    <>
      <div className="background_recipe">
        <Link to={{ pathname: history.location.source || "/" }}>
          <div className="back">
            <img src={ImageArrowBack} alt="" />
            <p>Voltar</p>
          </div>
        </Link>
      </div>

      <Section>
        <div className="background"></div>
        <div className="main_info">
          <h2>Crie sua própria Receita</h2>

          <div className="premium_member">
            <img src={ImagePremium} alt="" />
            <p>Premium</p>
          </div>
        </div>
      </Section>
    </>
  );
}
