import React from "react";

export const validationInputForms = (field, name) => {
  let error = "";
  switch (field?.type) {
    case "required":
      error = `${name} é obrigatório!`;
      break;
    case "minLength":
      error = field.message;
      break;
    case "validate":
      error = `As senhas devem ser iguais`;
      break;
    default:
      return null;
  }

  return <p className="error">{error}</p>;
};
