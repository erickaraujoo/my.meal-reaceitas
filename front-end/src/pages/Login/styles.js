import styled, { createGlobalStyle } from "styled-components";

import { theme } from './../../styles';

import BackgroundImage from "./../../assets/login/wallpaper.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: auto;
        background-image: url(${BackgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(48, 1fr);

  section.section_backToHome {
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & img {
      transform: rotateY(180deg);
      width: 30px;
    }

    & p {
      margin-left: 15px;
      font-size: 1.375rem;
      color: ${theme.colors.white};
    }
  }

  section.section_login {
    grid-column: 14/36;
    margin-top: 150px;
    height: auto;
    min-height: 525px;
    padding: 80px 140px 35px 140px;
    background: linear-gradient(
      180deg,
      rgba(6, 106, 170, 0.15) 0%,
      rgba(1, 37, 89, 0.15) 100%
    );
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1200px) {
      grid-column: 8/42;
    }
    @media (max-width: 700px) {
      grid-column: 1/49;
      padding: 80px 80px 35px 80px;
    }

    div.title_company {
      display: flex;
      width: 100%;

      h3 {
        margin-left: 15px;
        font-size: 1.75rem;
        color: ${theme.colors.white};
        font-family: PoppinsSemiBold;
        letter-spacing: 0.75px;
      }

      div {
        width: 40px;
        height: 40px;
        background: ${theme.colors.white};
        border-radius: 5px;
      }
    }

    p.subtitle {
      width: 100%;
      color: ${theme.colors.white};
      font-size: 1.125rem;
      font-family: PoppinsLight;
      margin-top: 20px;
    }

    form {
      width: 100%;

      div.form_email input,
      div.form_password input {
        width: 100%;
        min-height: 35px;
        height: auto;
        font-size: 1.125rem;
        font-family: PoppinsLight;
        color: ${theme.colors.white} !important;
        background: transparent;
        border: none;
        border-bottom: solid 1px ${theme.colors.white};
        padding: 0 0 5px 0;

        &::placeholder {
          color: ${theme.colors.white};
          opacity: 1;
        }
      }

      button {
        width: 100%;
        height: 45px;
        margin-top: 50px;
        border: none;
        background: linear-gradient(90deg, #80b6dd 0%, #044e8e 85.4%);
        box-shadow: 0px 0px 5px ${theme.colors.blackWithMediumOpacity};
        border-radius: 5px;
        font-family: PoppinsSemibold;
        font-size: 1.25rem;
        color: ${theme.colors.white};
      }

      div.form_email input {
        margin-top: 60px;
      }
      div.form_password input {
        margin-top: 45px;
      }
    }

    div.register {
      height: 30px;
      width: auto;
      margin-left: auto;
      padding: 0 10px;
      margin-top: 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;

      p {
        font-size: 1.125rem;
        font-family: PoppinsRegular;
        margin-right: 15px;
        color: ${theme.colors.white};
      }
    }
  }

  section.section_help {
    grid-column: 1/49;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 25px 0;

    p.help {
      color: ${theme.colors.white};
      font-size: 1.125rem;
      font-family: PoppinsRegular;
      width: 100%;
      text-align: center;
    }

    p.privacy_policy {
      margin-top: 115px;
      color: ${theme.colors.white};
      font-size: 1.125rem;
      font-family: PoppinsRegular;
      width: 100%;
      text-align: center;
    }
  }
`;
