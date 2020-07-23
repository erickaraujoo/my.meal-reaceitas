import types from "../../types";

export function sendComment({ usuario, idReceita, nota, comentario }) {
  return {
    type: types.CREATING_COMMENT,
    payload: { usuario, idReceita, nota, comentario }
  }
}