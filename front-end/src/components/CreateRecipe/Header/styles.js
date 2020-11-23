import styled from "styled-components";

import { theme } from "./../../../styles";

import BackgroundImageRecipe from "./../../../assets/profile/recipeBackground.png";

export const Section = styled.section`
  grid-column: 4/22;
  height: auto;
  box-shadow: 0px 1px 3px ${theme.colors.blackWithMediumOpacity};
  border-radius: 0px 0px 5px 5px;
  position: relative;

  div.background {
    height: 230px;
    background-image: url(${BackgroundImageRecipe});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  div.main_info {
    text-align: center;

    h2 {
      margin-top: 50px;
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
