import React from "react";
import { useSelector } from "react-redux";

import { Section } from "./styles";

export default function GeneralData() {
  const { modo_preparo, ingredientes } = useSelector(
    (state) => state.recipes.data
  );

  return (
    <Section>
      <h2>Dados Gerais</h2>

      <div className="container">
        <div className="method_preparation">
          <h3>MODO DE PREPARO</h3>

          {modo_preparo?.map(({ etapa }, index) => (
            <div className="topic_method" key={index}>
              <p>{index + 1}</p>
              <p>{etapa}</p>
            </div>
          ))}
        </div>
        <div className="ingredients">
          <h3>INGREDIENTES</h3>

          {ingredientes?.map(({ nome }, index) => (
            <div className="ingredient" key={index}>
              <svg height="24" width="50">
                <circle cx="5" cy="5" r="5" fill="#222426" />
              </svg>
              <p>{nome}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
