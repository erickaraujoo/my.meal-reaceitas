import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import ImagePremium from "./../../../assets/profile/premium.png";
import ImageArrowBack from "./../../../assets/arrow_back.png";
import ImageProfile from "../../../assets/login/user.png";

import { Section } from "./styles";

export default function Header() {
  const profile = useSelector((state) => state.user.data);
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
          <div className="image_profile">
            <img src={profile.data?.imagem ? profile.data.imagem : ImageProfile} alt="" />
          </div>

          <h2>{profile.data?.nome}</h2>

          <div className="premium_member">
            <img src={ImagePremium} alt="" />
            <p>Premium</p>
          </div>
        </div>
      </Section>
    </>
  );
}
