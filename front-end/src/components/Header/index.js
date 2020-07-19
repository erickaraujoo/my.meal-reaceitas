import React, { useState, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";

import { PopupNavUser } from "./../Elements/Popup";
import { Header } from "./styles";

export default function HeaderHome({ gridColumns }) {
  const [navigations, setNavigations] = useState([
    { value: "Início", to: "/" },
    { value: "Receitas", to: "/receitas" },
    { value: "Sobre Nós", to: "/empresa" },
  ]);

  useMemo(() => {
    const isAuthenticated = JSON.parse(
      localStorage.getItem("authenticated_user")
    );
    if (isAuthenticated) {
      setNavigations((prevNav) => [
        ...prevNav,
        { value: "Envie sua Receita", to: "/perfil/:id/receita/criar" },
        { value: "Perfil", image: "" },
      ]);
    } else {
      setNavigations((prevNav) => [
        ...prevNav,
        { value: "Cadastre-se", to: "/cadastrar" },
        { value: "Entrar", to: "/entrar" },
      ]);
    }
  }, []);

  const history = useHistory();

  return (
    <Header gridColumns={gridColumns}>
      <div className="logo">
        <p>MEAL RECEITAS</p>
      </div>
      <nav className="navigations">
        <ul>
          {navigations.map(({ value, id, to }, index) =>
            value === "Perfil" ? (
              <PopupNavUser key={index} />
            ) : (
              <Link
                to={{ pathname: to, source: history.location.pathname }}
                key={index}
              >
                <li
                  className={
                    history.location.pathname === to ? "current" : null
                  }
                >
                  <p> {value} </p>
                </li>
              </Link>
            )
          )}
        </ul>
      </nav>
    </Header>
  );
}
