import React from "react";
import { Link, useHistory } from 'react-router-dom';

import ImagePremium from "./../../../assets/profile/premium.png";
import ImageArrowBack from "./../../../assets/arrow_back.png";

import { Section } from "./styles";

export default function Header() {
  const history = useHistory()
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
          <div className="image_profile">
            <img
              src="https://trello-members.s3.amazonaws.com/5e3085f91594358482af820c/cd418de21c46559e868264879206f3af/170.png"
              alt=""
            />
          </div>

          <h2>Erick Araujo Barbosa</h2>

          <div className="premium_member">
            <img src={ImagePremium} alt="" />
            <p>Premium</p>
          </div>
        </div>
      </Section>
    </>
  );
}
