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
    width: 450px;
    height: 60px;
    background: ${theme.colors.orange};
    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-family: Poppins;
    border: none;
    border-radius: 5px;

    &:hover {
      color: ${theme.colors.orange};
      border: solid 2px ${theme.colors.orange};
      background: ${theme.colors.white};
    }

    & span {
      position: relative;
      z-index: 1;
    }
  }
`;
