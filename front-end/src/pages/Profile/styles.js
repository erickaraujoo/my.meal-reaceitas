import styled from "styled-components";

import { theme } from "./../../styles";

export const Main = styled.main`
  width: 100%;
  height: auto;
  padding: 0 1.5em 0 3.5em;
  padding: 0;
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
    z-index: 0;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    align-items: center;

    a {
      grid-column: 4/22;
      text-decoration: none;
    }

    div.back {
      position: relative;
      bottom: 35px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      width: 150px;

      img {
        width: 35px;
      }

      p {
        margin-left: 10px;
        font-size: 1.25rem;
        color: ${theme.colors.white};
        font-family: Poppins;
        letter-spacing: 0.35px;
      }
    }
  }
`;
