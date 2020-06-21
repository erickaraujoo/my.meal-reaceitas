import React, { useState } from "react";

import { useOrdenation } from '../../../context/Recipes/Filters';

import { OrderBy } from "./styles";

export default function OrderRecipesBy() {

  const { ordenation, setOrdenation } = useOrdenation();

  const [options] = useState([
    { title: "Selecionar", value: "default" },
    { title: "Nome da receita", value: "name_recipe" },
    { title: "Data de criação", value: "creation_date" },
    { title: "Mais avaliado", value: "most_rated" },
    { title: "Mais acessado", value: "most_acessed" },
    { title: "Mais favoritados", value: "most_favorite" },
    { title: "Mais comentados", value: "most_commented" },
  ]);

  const handleOrdenation = value => setOrdenation(value);

  return (
    <OrderBy className="order-by">
      <p>Ordenar por:</p>
      <select
        defaultValue={ordenation}
        onChange={(e) => handleOrdenation(e.target.value)}
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
