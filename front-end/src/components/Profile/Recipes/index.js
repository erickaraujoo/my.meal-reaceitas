import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Section } from "./styles";

import ImageAddRecipe from "./../../../assets/profile/add.png";
import ImageClose from "./../../../assets/profile/close.png";
import ImageEdit from "./../../../assets/profile/edit.png";

export default function Recipes() {
  const history = useHistory();

  const [recipes] = useState([
    {
      image:
        "https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg",
      name: "Bolo de Fubá",
      date: "24/05/2020",
      hits: "152",
      favorites: "15",
    },
    {
      image:
        "https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg",
      name: "Bolo de Fubá",
      date: "24/05/2020",
      hits: "152",
      favorites: "15",
    },
    {
      image:
        "https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg",
      name: "Bolo de Fubá",
      date: "24/05/2020",
      hits: "152",
      favorites: "15",
    },
    {
      image:
        "https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg",
      name: "Bolo de Fubá",
      date: "24/05/2020",
      hits: "152",
      favorites: "15",
    },
  ]);
  return (
    <Section>
      <div className="title">
        <h3>Suas Receitas</h3>
        <Link
          to={{
            pathname: "12/receita/criar",
            source: history.location.pathname,
          }}
        >
          <img src={ImageAddRecipe} alt="add" />
        </Link>
      </div>

      <ul>
        {recipes.map(({ image, name, date, hits, favorites }, index) => (
          <li key={index}>
            <div className="image">
              <img src={image} alt={name} />
            </div>
            <p className="name">{name}</p>
            <p className="date">{date}</p>
            <p className="hits">{hits} acessos</p>
            <p className="favorites">{favorites} favoritos</p>
            <div className="options">
              <img className="edit" src={ImageEdit} alt="edit" />
              <img className="delete" src={ImageClose} alt="delete" />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
