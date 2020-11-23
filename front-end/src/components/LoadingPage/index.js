import React from "react";

import { RotateSpinner } from "react-spinners-kit";

import { Loading, ProgressLoading } from "./styles";

import { theme } from "../../styles";

export const LoadingPage = () => {
  return (
    <Loading>
      <svg width="250" height="250" viewBox="0 0 40 60">
        <polygon
          className="triangle"
          fill="none"
          stroke={theme.colors.marsala}
          strokeWidth="1"
          points="16,1 32,32 1,32"
        />
        <text
          className="text_loading"
          x="0"
          y="42.5"
          fill={theme.colors.marsala}
        >
          Carregando...
        </text>
      </svg>
    </Loading>
  );
};

export const ProgressLoadingPage = ({ loading }) => {
  if (loading) 
    return (
      <ProgressLoading>
        <RotateSpinner size={85} color={theme.colors.white} />
      </ProgressLoading>
    );
  return null;
};
