import styled from "styled-components";

import { theme } from "./../../../styles";

export const Section = styled.section`
  grid-column: 4/22;
  height: auto;
  margin-top: 80px;
  background: ${theme.colors.white};
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  button {
    border: none;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-family: Poppins;
    background-color: #222;
    padding: 0 60px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    width: 450px;
    height: 60px;

    & span {
      position: relative;
      z-index: 1;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 490%;
      width: 140%;
      background: ${theme.colors.orange};
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      -webkit-transform: translateX(-93%) translateY(30%) rotate(-45deg);
      /* transform: translateX(-98%) translateY(-25%) rotate(45deg); */
    }

    &:hover:after {
      -webkit-transform: translateX(0%) translateY(-40%) rotate(0deg);
      /* transform: translateX(-9%) translateY(-25%) rotate(45deg); */
    }
  }
`;
