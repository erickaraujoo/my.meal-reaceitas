import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Header } from "./styles";

export default function HeaderHome({ gridColumns }) {
  const [navigations] = useState([
    { value: "Início", id: 1, to: "/" },
    { value: "Receitas", id: 2, to: "/receitas" },
    { value: "Sobre Nós", id: 3, to: "/empresa" },
    { value: "Envie sua Receita", id: 4, to: "/perfil/:id/receita/criar" },
    { value: "Cadastre-se", id: 5, to: "/cadastrar" },
    { value: "Entrar", id: 6, to: "/entrar" },
  ]);

  const history = useHistory();

  return (
    <Header gridColumns={gridColumns}>
      <div className="logo">
        <p>MEAL RECEITAS</p>
      </div>
      <nav className="navigations">
        <ul>
          {navigations.map(({ value, id, to }, index) => (
            <Link to={{ pathname: to, source: history.location.pathname }} key={index}>
              <li className={history.location.pathname === to ? 'current' : null}>
                <p> {value} </p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </Header>
  );
}
