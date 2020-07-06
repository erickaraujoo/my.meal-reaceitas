import styled from "styled-components";

import { theme } from '../../styles';

export const Main = styled.main`
  width: 100%;
  height: auto;
  padding-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  column-gap: 1.25em;
  padding-top: calc(90px + 5em);

  div.background_recipe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 295px;
    background-color: ${theme.colors.marsala};
    z-index: -10;
  }
`;
