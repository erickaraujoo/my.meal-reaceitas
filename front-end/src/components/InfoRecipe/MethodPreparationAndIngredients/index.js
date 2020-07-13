import React, { useState } from "react";

import { Section } from "./styles";

export default function GeneralData() {
  const [methods] = useState([
    {
      topic: 1,
      text:
        "Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.",
    },
    { topic: 2, text: "Despeje a massa em uma forma untada e polvilhada." },
    {
      topic: 3,
      text:
        "Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.",
    },
    { topic: 4, text: "Despeje a massa em uma forma untada e polvilhada." },
    {
      topic: 5,
      text:
        "Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.",
    },
    { topic: 6, text: "Despeje a massa em uma forma untada e polvilhada." },
    {
      topic: 7,
      text:
        "Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.",
    },
    { topic: 8, text: "Despeje a massa em uma forma untada e polvilhada." },
    {
      topic: 9,
      text:
        "Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.",
    },
    { topic: 10, text: "Despeje a massa em uma forma untada e polvilhada." },
    {
      topic: 11,
      text:
        "Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.",
    },
    { topic: 12, text: "Despeje a massa em uma forma untada e polvilhada." },
  ]);

  const [ingredients] = useState([
    { text: "3 ovos inteiros" },
    { text: "2 xícaras (chá) de açúcar" },
    { text: "2 xícaras (chá) de fubá" },
    { text: "3 colheres (sopa) de farinha de trigo" },
    { text: "1/2 copo (americano) de óleo" },
    { text: "1 copo (americano) de leite" },
    { text: "1 colher (sopa) de fermento em pó" },
    { text: "3 ovos inteiros" },
    { text: "2 xícaras (chá) de açúcar" },
    { text: "2 xícaras (chá) de fubá" },
    { text: "3 colheres (sopa) de farinha de trigo" },
    { text: "1/2 copo (americano) de óleo" },
    { text: "1 copo (americano) de leite" },
    { text: "1 colher (sopa) de fermento em pó" },
    { text: "3 ovos inteiros" },
    { text: "2 xícaras (chá) de açúcar" },
    { text: "2 xícaras (chá) de fubá" },
    { text: "3 colheres (sopa) de farinha de trigo" },
    { text: "1/2 copo (americano) de óleo" },
    { text: "1 copo (americano) de leite" },
    { text: "1 colher (sopa) de fermento em pó" },
  ]);

  return (
    <Section>
      <h2>Dados Gerais</h2>

      <div className="container">
        <div className="method_preparation">
          <h3>MODO DE PREPARO</h3>

          {methods.map(({ topic, text }, index) => (
            <div className="topic_method" key={index}>
              <p>{topic}</p>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="ingredients">
          <h3>INGREDIENTES</h3>

          {ingredients.map(({ text }, index) => (
            <div className="ingredient" key={index}>
              <svg height="24" width="50">
                <circle cx="5" cy="5" r="5" fill="#222426" />
              </svg>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
