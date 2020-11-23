import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { validationInputForms } from "../../../../utils/validations";
import { sendComment } from "../../../../store/modules/comments/actions";
import cogoToast from "cogo-toast";

import { SendFeedback } from "./styles";

export default function Avaliation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id: idReceita } = useParams();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {},
  });
  const comment = useSelector((state) => state.comments);

  const onSubmit = ({ nota, comentario }) => {
    if(localStorage.getItem("authenticated_user")) {
      const { idUsuario } = JSON.parse(
        localStorage.getItem("authenticated_user")
      );
      const dataCriacao = new Date();
      dispatch(sendComment({ usuario: { idUsuario }, idReceita, nota, comentario, dataCriacao }));
    } else {
      history.push('/entrar');
    }
  };

  useEffect(() => {
    if (comment.success) cogoToast.success("Avaliação criada com sucesso!");
  }, [comment.success]);

  return (
    <SendFeedback onSubmit={handleSubmit(onSubmit)}>
      <div className="rating_wrapper">
        <input
          type="radio"
          name="nota"
          id="start_1"
          value={5}
          ref={register({ required: true })}
        />
        <label htmlFor="start_1"></label>
        <input
          type="radio"
          name="nota"
          id="start_2"
          value={4}
          ref={register({ required: true })}
        />
        <label htmlFor="start_2"></label>
        <input
          type="radio"
          name="nota"
          id="start_3"
          value={3}
          ref={register({ required: true })}
        />
        <label htmlFor="start_3"></label>
        <input
          type="radio"
          name="nota"
          id="start_4"
          value={2}
          ref={register({ required: true })}
        />
        <label htmlFor="start_4"></label>
        <input
          type="radio"
          name="nota"
          id="start_5"
          value={1}
          ref={register({ required: true })}
        />
        <label htmlFor="start_5"></label>
      </div>
      {validationInputForms(errors.nota, "Nota")}
      <textarea
        name="comentario"
        className="comment"
        placeholder="Mande seu comentário..."
        ref={register({ required: false })}
      ></textarea>
      <button type="submit">Enviar</button>
    </SendFeedback>
  );
}
