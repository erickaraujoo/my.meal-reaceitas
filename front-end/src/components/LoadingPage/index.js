import React from "react";

import { RotateSpinner } from "react-spinners-kit";

import { Loading } from "./styles";

import { theme } from "../../styles"

export default function LoadingPage() {
  return (
    <Loading>
      <h2>Carregando...</h2>
      <RotateSpinner size={30} color={theme.colors.blue} loading={true} />
    </Loading>
  );
}
