import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBookOpen,
  FaSignOutAlt,
  FaStarHalfAlt,
} from "react-icons/fa";

import { PopupUser } from "./styles";

export const PopupNavUser = () => {
  const [viewPopup, setViewPopup] = useState(false);
  const handlePopup = () => setViewPopup(viewPopup ? false : true);
  const handleExit = () => {
    localStorage.removeItem("authenticated_user");
    window.location.reload();
  };
  const authenticatedUser = JSON.parse(
    localStorage.getItem("authenticated_user")
  );

  return (
    <>
      <li className="profile" onClick={() => handlePopup()}>
        <img src={authenticatedUser.image} alt="" />
      </li>
      <PopupUser visible={viewPopup} onMouseLeave={() => handlePopup()}>
        <div className="my_profile">
          <img src={authenticatedUser.image} alt="" />
          <h4> {authenticatedUser.nome} </h4>
          <p> {authenticatedUser.email} </p>
          <hr />
        </div>
        <ul>
          <li>
            <Link to={{ pathname: `/perfil/${authenticatedUser.idUsuario}` }}>
              <FaUser className="icon_popup" size={15} />
              <p className="title_popup">Meu perfil</p>
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/perfil/${authenticatedUser.idUsuario}/receita/criar`,
              }}
            >
              <FaBookOpen className="icon_popup" size={15} />
              <p className="title_popup">Criar uma receita</p>
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/" }}>
              <FaStarHalfAlt className="icon_popup" size={15} />
              <p className="title_popup">Avaliar Site</p>
            </Link>
          </li>
          <li className="exit" onClick={() => handleExit()}>
            <FaSignOutAlt size={15} color={"#AB0310"} />
            <p>Sair</p>
          </li>
        </ul>
      </PopupUser>
    </>
  );
};
