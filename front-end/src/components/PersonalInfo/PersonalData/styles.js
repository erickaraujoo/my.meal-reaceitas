import styled from "styled-components";

import { theme } from "./../../../styles";

export const Section = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  padding-bottom: 100px;

  form {
    grid-column: 4/22;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.personal_data {
      width: 100%;
      margin-top: 20px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      padding: 60px 100px 100px;

      div.container_input {
        width: 100%;
        height: auto;

        label {
          display: flex;
          align-items: center;
          font-size: 1rem;
          font-family: Poppins;

          img {
            margin-right: 10px;
            transform: translateY(-1.5px);
            height: 22.5px;
          }
        }

        input {
          width: 100%;
          margin-top: 20px;
          border: 0.5px solid ${theme.colors.blackWithGreatOpacity};
          border-radius: 3px;
          font-size: 1rem;
          font-family: PoppinsRegular;
          letter-spacing: 0.15px;
          height: 45px;
        }

        & + div.container_input {
          margin-top: 40px;
        }
      }
    }

    button.submit {
      width: 450px;
      height: 55px;
      margin-top: 80px;
      background: ${theme.colors.orange};
      font-size: 1.25rem;
      font-family: PoppinsSemiBold;
      color: ${theme.colors.white};
      letter-spacing: 0.25px;
      border: none;
      border-radius: 5px;
      transition: background 0.2s;

      &:hover {
        color: ${theme.colors.orange};
        background: ${theme.colors.white};
        border: solid 1.5px ${theme.colors.orange};
      }

      & span {
        position: relative;
        z-index: 1;
      }
    }
  }
`;
