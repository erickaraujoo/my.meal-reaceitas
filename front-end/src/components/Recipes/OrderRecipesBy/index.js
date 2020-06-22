import React, { useState } from "react";

import { useOrdenation } from '../../../context/Recipes/Filters';

import { OrderBy } from "./styles";

export default function OrderRecipesBy() {

  const { sort, setSort } = useOrdenation();

  const [options] = useState([
    { title: "Selecionar", value: "default" },
    { title: "Nome da receita", value: "nome" },
    { title: "Data de criação", value: "data_criacao" },
    { title: "Mais avaliado", value: "avaliacoes" },
    { title: "Mais acessado", value: "acessos" },
    { title: "Mais favoritados", value: "favoritos" },
    { title: "Mais comentados", value: "comentarios" },
  ]);

  const handlesort = value => setSort(value);

  return (
    <OrderBy className="order-by">
      <p>Ordenar por:</p>
      <select
        defaultValue={sort}
        onChange={(e) => handlesort(e.target.value)}
      >
        {options.map(({ title, value }, index) => (
          <option key={index} value={value}>
            {title}
          </option>
        ))}
      </select>
    </OrderBy>
  );
}
