import styled from 'styled-components';

import { theme } from './../../../styles';

export const Container = styled.section`
  grid-column: 1/25;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  padding: 180px 0;

  div.modal {
    display: flex;
    height: auto;
    padding: 53px 100px;
    grid-column: 3/23;
    box-shadow: 0 10px 15px ${theme.colors.blackCharcoalWithMediumOpacity};
    position: relative;
    background: ${theme.colors.white};

    div.text {
      width: calc(100% - 250px);

      h2 {
        font-size: 2.375rem;
        font-family: PoppinsExtraBold;
        opacity: 0.8;
      }

      p {
        margin-top: 10px;
        font-size: 1.25rem;
        font-family: Poppins;
        opacity: 0.8;

      }
    }

    div.button_getStarted {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 250px;

      button {
        height: 45px;
        max-height: auto;
        width: 180px;
        background: ${theme.colors.orange};
        color: ${theme.colors.white};
        font-size: 1.125rem;
        border: none;
        box-shadow: 0 2px 5px ${theme.colors.blackWithGreatOpacity};
        border-radius: 5px;
        transition: font-size 0.2s;
        font-family: Poppins;
        transition: background 0.2s;

        &:hover {
          background: ${theme.colors.white};
          color: ${theme.colors.orange};
          border: solid 1.5px ${theme.colors.orange};
        }
      }
    }
  }
`;