import styled from "styled-components";

import { theme } from "./../../../styles";

import BackgroundImageProfile from "./../../../assets/profile/fundo.png";

export const Section = styled.section`
  grid-column: 4/22;
  height: 450px;
  background: ${theme.colors.white};
  box-shadow: 0px 1px 3px ${theme.colors.blackWithMediumOpacity};
  border-radius: 0px 0px 5px 5px;
  position: relative;

  div.background {
    height: 230px;
    background-image: url(${BackgroundImageProfile});
    background-size: contain;
  }

  div.main_info {
    position: relative;
    top: -75px;
    text-align: center;

    div.image_profile {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      padding: 3px;
      background-color: ${theme.colors.white};
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    h2 {
      margin-top: 30px;
      font-size: 1.625rem;
      font-family: PoppinsLight;
      color: ${theme.colors.black};
      line-height: 40px;
      letter-spacing: 0.5px;
    }

    div.premium_member {
      min-height: 30px;
      height: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      margin: 25px 30px 20px auto;

      img {
        margin-right: 18px;
      }

      p {
        font-family: Poppins;
        font-size: 1.125rem;
        color: ${theme.colors.black};
      }
    }
  }
`;
