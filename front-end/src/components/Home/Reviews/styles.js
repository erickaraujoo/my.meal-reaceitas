import styled from "styled-components";

// import ImageReview from "./../../../assets/home/wallpapers/wallpaper_review.png";

import { theme } from "./../../../styles";

export const Review = styled.section`
  margin-top: 100px;
  grid-column: 1/25;

  h2 {
    font-size: 2.25rem;
    text-align: center;
    font-family: PoppinsExtraBold;
    opacity: 0.8;
    letter-spacing: 0px;

    &::after {
      content: "";
      display: flex;
      align-items: center;
      width: 250px;
      margin: 5px auto 0 auto;
      border: solid 3px ${theme.colors.marsala};
    }
  }

  div.container_reviews {
    margin-top: 80px;
    height: auto;
    padding: 150px 0;
    /* background-repeat: repeat; */
    /* background-position: center; */
    background: ${theme.colors.marsala};
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    column-gap: 20px;

    div {
      min-height: 200px;
      height: auto;
      border-radius: 3px;
      background: ${theme.colors.white};
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease-in-out;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow: 0 0 3px ${theme.colors.blackWithGreatOpacity};
        position: relative;
        top: -40px;
        background: ${theme.colors.white};
      }

      h4, p {
        position: relative;
        top: -30px;
      }

      h4 {
        width: 100%;
        text-align: center;
        font-size: 1.25rem;
        font-family: Poppins;
      }

      p {
        margin-top: 15px;
        text-align: center;
        font-size: 1rem;
        font-family: PoppinsRegular;
        padding: 0 50px;
      }

      &:hover {
        transform: translateY(-20px);
      }
    }

    div:nth-child(1) {
      grid-column: 2/8;
    }

    div:nth-child(2) {
      grid-column: 8/14;
    }

    div:nth-child(3) {
      grid-column: 14/20;
    }
  }
`;
