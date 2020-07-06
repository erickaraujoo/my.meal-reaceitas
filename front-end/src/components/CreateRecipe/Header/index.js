import React from "react";

import { Section } from "./styles";

import ImagePremium from "./../../../assets/profile/premium.png";

export default function Header() {
  return (
    <>
      <div className="background_recipe"></div>

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
