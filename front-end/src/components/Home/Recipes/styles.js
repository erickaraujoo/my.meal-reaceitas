import styled from 'styled-components';

import { theme } from './../../../styles';

export const Recipes = styled.section`
  margin-top: 100px;
  grid-column: 4/22;

  h1 {
    text-align: center;
  }

  div.buttons {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    button {
      margin: 0 10px;
      height: 40px;
      width: 150px;
      border-radius: 3px;
      border: none;
      box-shadow: 0 0 5px ${theme.colors.blackWithGreatOpacity};
      background: ${theme.colors.pattensBlue};
      font-family: Poppins;
      font-size: 0.875rem;

      &:hover {
        background: ${theme.colors.orange};
        color: ${theme.colors.white};
        box-shadow: 0 0 5px ${theme.colors.blackWithMediumOpacity};
      }
    }
  }
`;