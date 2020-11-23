import styled from "styled-components";

import { theme } from "./../../../styles";

export const Section = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  position: relative;
  padding-top: calc(90px + 5em);

  div.background {
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
      position: relative;
      bottom: 35px;
    }

    div.back {
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

  div.header {
    grid-column: 4/22;
    background: ${theme.colors.white};
    padding: 40px 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 5px 5px;

    img {
      height: 80px;
      width: auto;
      margin-left: -120px;
      margin-right: 40px;
    }

    h2 {
      font-family: Poppins;
      font-size: 1.5625rem;
      letter-spacing: 0.75px;
      opacity: 0.8;
    }
  }
`;
