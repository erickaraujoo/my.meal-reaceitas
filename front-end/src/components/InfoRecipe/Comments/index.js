import React, { lazy, useMemo } from "react";
import { useSelector } from "react-redux";

import { Section } from "./styles";

import ImageStar from "./../../../assets/info_recipe/start.png";
import { useState } from "react";

export default function Comments() {
  const SendFeedback = lazy(() => import("./Avaliation"));
  const avaliations = useSelector((state) => state.recipes.data.avaliacoes);
  const comments = [];

  if (avaliations) avaliations.map((avaliation) => comments.push(avaliation));
  console.log(comments);

  const newComment = useSelector((state) => state.comments);
  const returnDate = (date) => {
    console.log(date);
    const formattedData = date.toLocaleDateString().split("/");
    return `${formattedData[0]} de ${date.toLocaleDateString("default", {
      month: "long",
    })} de ${formattedData[2]}`;
  };
  const returnTime = (date) => date.toLocaleTimeString();

  useMemo(() => {
    if (newComment.success) {
      const userStorage = JSON.parse(
        localStorage.getItem("authenticated_user")
      );
      comments.push({
        comentario: newComment.data.comentario,
        idAvaliacao: newComment.data.idAvaliacao,
        idReceita: newComment.data.idReceita,
        nota: newComment.data.nota,
        dataCriacao: new Date(),
        usuario: {
          idUsuario: newComment.data.usuario.idUsuario,
          nome: userStorage.nome,
          imagem: userStorage.image,
        },
      });
    }
  }, [comments, newComment.data, newComment.success]);

  return (
    <Section>
      <h2>O que você achou dessa receita?</h2>

      <SendFeedback />
      <div className="comments">
        <h3>Comentários ({avaliations?.length ? avaliations.length : 0})</h3>

        <ul>
          {comments?.map(
            ({ nota, comentario, dataCriacao, usuario }, index) => (
              <li key={index}>
                <div className="photo">
                  <img src={usuario.imagem} alt="" />
                </div>
                <div className="triangle" />
                <div className="comment">
                  <div className="title">
                    <p>
                      {`${usuario.nome} / ${returnDate(
                        new Date(dataCriacao)
                      )}, ${returnTime(new Date(dataCriacao))}`}
                    </p>
                    {/* <p> Erick Araujo / 29 de Junho de 2020, 10:26 am </p> */}
                    <div className="avaliation">
                      <p>Avaliação: {nota.toFixed(1)}</p>
                      <img src={ImageStar} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <p>{comentario ? comentario : null}</p>
                  </div>
                </div>
              </li>
            )
          )}
          {!avaliations && (
            <p className="avaliation_notfound">
              Essa receita não possui nenhum comentário
            </p>
          )}
        </ul>
      </div>
    </Section>
  );
}
