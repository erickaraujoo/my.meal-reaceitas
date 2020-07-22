import types from "../../types";

export function sendComment({ idUsuario, idReceita, nota, comentario }) {
  return {
    type: types.CREATING_COMMENT,
    payload: { idUsuario, idReceita, nota, comentario }
  }
}