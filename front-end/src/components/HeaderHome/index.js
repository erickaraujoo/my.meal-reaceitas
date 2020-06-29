import React, { useState } from "react";

// import { Container } from './styles';

import { Header } from "./styles";

export default function HeaderHome() {
  const [navigations] = useState([
    { value: "Início", current: false, id: 1 },
    { value: "Receitas", current: false, id: 2 },
    { value: "Sobre Nós", current: false, id: 3 },
    { value: "Envie sua Receita", current: false, id: 4 },
    { value: "Cadastre-se", current: false, id: 5 },
    { value: "Entrar", current: false, id: 6 },
  ]);

  return (
    <Header>
      <div className="logo">
        <p>MEAL RECEITAS</p>
      </div>
      <nav className="navigations">
        <ul>
          {navigations.map(({ value, current, id }, index) => (
            <li
              className={current ? "current" : null}
              key={index}
            >
              <p> {value} </p>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
  );
}
