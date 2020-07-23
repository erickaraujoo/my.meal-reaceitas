import React, { lazy, useMemo } from "react";
import { useSelector } from "react-redux";

import { Section } from "./styles";

import ImageStar from "./../../../assets/info_recipe/start.png";
import { useState } from "react";

export default function Comments() {
  const SendFeedback = lazy(() => import("./Avaliation"));
  const [avaliations, setAvaliations] = useState(useSelector((state) => state.recipes.data.avaliacoes));
  const newComment = useSelector((state) => state.comments);

  useMemo(() => {
    if(newComment.success) {
      setAvaliations(prevAvaliation => [
        ...prevAvaliation,
        newComment.data,
      ])
    }
  }, [newComment.data, newComment.success]);

  return (
    <Section>
      <h2>O que você achou dessa receita?</h2>

      <SendFeedback />
      <div className="comments">
        <h3>Comentários ({avaliations?.length ? avaliations.length : 0})</h3>

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
                    <p>Avaliação: {nota.toFixed(1)}</p>
                    <img src={ImageStar} alt="" />
                  </div>
                </div>
                <div className="text">
                  <p>{comentario ? comentario : 'Sem comentário'}</p>
                </div>
              </div>
            </li>
          ))}
          {!avaliations?.length && (
            <p className="avaliation_notfound">Essa receita não possui nenhum comentário</p>
          )}
        </ul>
      </div>
    </Section>
  );
}
