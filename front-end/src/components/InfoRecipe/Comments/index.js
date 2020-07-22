import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import { Section } from "./styles";

import ImageStar from "./../../../assets/info_recipe/start.png";
import { useState } from "react";

export default function Comments() {
  const SendFeedback = lazy(() => import("./Avaliation"));
  const [avaliations, setAvaliations] = useState(useSelector((state) => state.comments.data.avaliacoes));
  const newComment = useSelector((state) => state.comments);

  return (
    <Section>
      <h2>O que você achou dessa receita?</h2>

      <SendFeedback />
      <div className="comments">
        <h3>Comentários ({avaliations?.length})</h3>

        <ul>
          {avaliations?.map(({ nota, comentario }, index) => (
            <li key={index}>
              <div className="photo">
                <img
                  src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png"
                  alt=""
                />
              </div>
              <div className="triangle" />
              <div className="comment">
                <div className="title">
                  <p>Erick Araujo / 29 de Junho de 2020, 10:26 am</p>
                  <div className="avaliation">
                    <p>Avaliação: {nota}</p>
                    <img src={ImageStar} alt="" />
                  </div>
                </div>
                <div className="text">
                  <p>{comentario}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
