import styled from "styled-components";

import { theme } from "./../../../styles";

export const Category = styled.section`
  margin-top: 100px;
  padding: 50px 150px 80px;
  background: #f2f5fa;

  h2 {
    font-size: 2.125rem;
    color: ${theme.colors.black};
    opacity: 0.8;
    text-align: center;
    font-family: Poppins;
  }

  p.subtitle {
    font-size: 1rem;
    font-family: PoppinsRegular;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 50px;
    opacity: 0.8;
  }

  div#infinite-carousel {
    padding: 0 50px;

    div.InfiniteCarouselFrame {
      padding: 20px 0;
    }

    i.InfiniteCarouselArrowNextIcon {
      border: solid ${theme.colors.orange};
      border-width: 0 5px 5px 0;
    }

    i.InfiniteCarouselArrowPrevIcon {
      border: solid ${theme.colors.orange};
      border-width: 0 5px 5px 0;
    }
  }

  div.category {
    background-color: ${theme.colors.orange};
    width: 140px;
    padding: 25px 10px;
    height: auto;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 2px ${theme.colors.blackWithMediumOpacity};
    transition: box-shadow 0.15s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 5px ${theme.colors.black};
    }

    img {
      width: auto;
      min-width: 70px;
      height: 70px;
    }

    p {
      margin-top: 15px;
      font-family: PoppinsRegular;
      font-size: 1rem;
      color: ${theme.colors.white};
      text-decoration: none;
    }
  }

  /* ul.list_category {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    grid-column: 4/22;

    a {
      text-decoration: none;
    }

    li {
      margin: 0 10px;
      background-color: #eb7268;
      width: 130px;
      padding: 25px 10px;
      height: auto;
      display: flex;
      border-radius: 10px;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 0 2px ${theme.colors.blackWithMediumOpacity};
      transition: box-shadow 0.15s;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 5px ${theme.colors.black};
      }

      img {
        width: auto;
        min-width: 70px;
        height: 70px;
      }

      p {
        margin-top: 15px;
        font-family: PoppinsRegular;
        font-size: 1rem;
        color: ${theme.colors.white};
        text-decoration: none;
      }
    }
  } */
`;
