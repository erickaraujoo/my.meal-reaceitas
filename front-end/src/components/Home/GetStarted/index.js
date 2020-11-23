import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function GetStarted() {
  return (
    <Container>
      <div className="modal">
        <div className="text">
          <h2>Você está pronto para cozinhar?</h2>
          <p>Encontre sua receita favorita agora</p>
        </div>
        <div className="button_getStarted">
          <Link to={{ pathname: '/receitas' }}>
            <button>Iniciar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
