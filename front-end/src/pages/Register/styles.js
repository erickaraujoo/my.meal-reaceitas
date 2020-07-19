import styled from "styled-components";

import { theme } from "./../../styles";

export const SectionRegister = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.solitude};
`;

export const ModalRegister = styled.div`
  width: 80%;
  height: 620px;
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 20px ${theme.colors.blackWithGreatOpacity};

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.whiteWithMediumOpacity};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.whiteSomke};
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.blackWithGreatOpacity};
  }

  div.modal_welcome,
  div.modal_form {
    width: 50%;
    height: auto;
  }

  div.modal_welcome {
    padding: 50px 70px;
    background: ${theme.colors.marsala};

    h4 {
      font-size: 1.125rem;
      color: ${theme.colors.white};
      text-align: center;
      margin-top: 130px;
      font-family: PoppinsLight;
      font-weight: 100;
      letter-spacing: 0.25px;
    }

    h2 {
      font-size: 3rem;
      font-family: PoppinsLight;
      color: ${theme.colors.white};
      text-align: center;
      letter-spacing: 1px;
    }

    hr {
      border: solid 3px ${theme.colors.white};
      border-radius: 5px;
      width: 50px;
      margin: 5px auto 0;
    }

    p {
      margin-top: 40px;
      color: ${theme.colors.white};
      font-size: 0.625rem;
      font-family: PoppinsLight;
      text-align: center;
    }

    div.companyName {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a { display: flex };

      img {
        width: 25px;
      }

      p {
        margin-left: 15px;
        margin-top: 0px !important;
        text-align: left;
        font-size: 1.25rem;
        font-family: Poppins;
        letter-spacing: 0.25px;
      }
    }
  }

  div.modal_form {
    padding: 80px 80px 50px 80px;
    overflow: auto;

    h4 {
      font-size: 1.5rem;
      font-family: Poppins;
      color: ${theme.colors.marsala};
      text-align: center;
    }

    p {
      margin-top: 25px;
      font-size: 0.625rem;
      font-family: PoppinsLight;
      text-align: center;
      color: ${theme.colors.lightGray};
    }

    form {
      margin-top: 30px;

      p.error {
        color: ${theme.colors.darkRed};
        text-align: left;
        font-size: 0.875rem;
        font-family: PoppinsSemibold;
        margin-top: 7.5px;
      }

      a {
        text-decoration: none;
      }

      p.forgot_password {
        text-align: left;
        font-family: PoppinsSemibold;
        font-size: 0.9375rem;

        a {
          color: ${theme.colors.marsala};
        }
      }

      button {
        width: 100%;
        height: 50px;
        border-radius: 50px;
        background: ${theme.colors.marsala};
        color: ${theme.colors.white};
        font-size: 1.25rem;
        font-family: Poppins;
        margin-top: 50px;
        border: none;
        transition: background 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
          margin-left: 15px;
        }

        &:hover {
          background: ${theme.colors.white};
          border: solid 2px ${theme.colors.marsala};
          color: ${theme.colors.marsala};
        }
      }

      p.register {
        text-align: right;
        font-family: PoppinsRegular;
        font-size: 1rem;
        color: ${theme.colors.black};
      }

      span.color_marsala {
        font-family: PoppinsSemibold;
        color: ${theme.colors.marsala};
      }
    }
  }
`;
