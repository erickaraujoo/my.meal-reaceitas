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
    localStorage.removeItem('authenticated_user');
    window.location.reload();
  } 

  return (
    <>
      <li className="profile" onClick={() => handlePopup()}>
        <img src="" alt="" />
      </li>
      <PopupUser visible={viewPopup} onMouseLeave={() => handlePopup()}>
        <div className="my_profile">
          <img
            src="https://trello-members.s3.amazonaws.com/5e3085f91594358482af820c/cd418de21c46559e868264879206f3af/170.png"
            alt=""
          />
          <h4>Erick Araujo</h4>
          <p>araujo.erick2002@gmail.com</p>
          <hr />
        </div>
        <ul>
          <li>
            <Link to={{ pathname: "/perfil/12" }}>
              <FaUser className="icon_popup" size={15} />
              <p className="title_popup">Meu perfil</p>
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/perfil/12/receita/criar" }}>
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
