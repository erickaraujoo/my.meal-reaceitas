import React from "react";

import { Section } from "./styles";

export default function GeneralData() {
  return (
    <Section>
      <h2>Dados Gerais</h2>

      <div className="container">
        <div className="method_preparation">
          <h3>MODO DE PREPARO</h3>

          <div className="topic_method">
            <p>1</p>
            <p>
              Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.
            </p>
          </div>
          <div className="topic_method">
            <p>2</p>
            <p>Despeje a massa em uma forma untada e polvilhada.</p>
          </div>
          <div className="topic_method">
            <p>3</p>
            <p>
              Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.
            </p>
          </div>
          <div className="topic_method">
            <p>4</p>
            <p>Despeje a massa em uma forma untada e polvilhada.</p>
          </div>
          <div className="topic_method">
            <p>5</p>
            <p>
              Leve para assar em forno médio 180 °C) preaquecido por 40 minutos.
            </p>
          </div>
        </div>
        <div className="ingredients">
          <h3>INGREDIENTES</h3>

          <div className="ingredient">
            <p>1</p>
            <p>Egg</p>
          </div>
          <div className="ingredient">
            <p>1/4</p>
            <p>Teaspoon mustard</p>
          </div>
          <div className="ingredient">
            <p>1/4</p>
            <p>Small onion, finely grated</p>
          </div>
          <div className="ingredient">
            <p>2</p>
            <p>Clove garlic, minced</p>
          </div>
          <div className="ingredient">
            <p>2</p>
            <p>Teaspoon salt</p>
          </div>
          <div className="ingredient">
            <p>3</p>
            <p>Lb medium ground beef</p>
          </div>
          <div className="ingredient">
            <p>1/2</p>
            <p>Teaspoon worcestershire mustard</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
