import React from "react";

import { RotateSpinner } from "react-spinners-kit";

import { Loading } from "./styles";

export default function LoadingPage() {
  return (
    <Loading>
      <p>Carregando...</p>
      <RotateSpinner size={30} color={"#254B6E"} loading={true} />
    </Loading>
  );
}
