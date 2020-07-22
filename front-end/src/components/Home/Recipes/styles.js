import styled from "styled-components";

import { theme } from "./../../../styles";

export const Recipes = styled.section`
  margin-top: 120px;
  column-gap: 1em;

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

  div.buttons {
    margin-top: 80px;
    height: auto;

    ul {
      display: flex;
      column-gap: 20px;
      list-style: none;
      flex-wrap: wrap;
      justify-content: center;

      button {
        height: 40px;
        width: calc(100% - 50% - 10px);
        border-radius: 3px;
        border: none;
        box-shadow: 0 2px 5px ${theme.colors.raven};
        background: ${theme.colors.pattensBlue};
        font-family: Poppins;
        font-size: 1rem;
        transition: background 0.2s;
        margin: 0 10px;
        width: 126.25px;

        &:hover {
          background: ${theme.colors.orange};
          color: ${theme.colors.white};
        }
      }

      button.current {
        background: ${theme.colors.orange};
        color: ${theme.colors.white};
      }
    }
  }

  div.recipes {
    margin-top: 50px;
    height: auto;

    ul {
      display: grid;
      grid-template-columns: repeat(24, 1fr);
      column-gap: 20px;
      list-style: none;
      flex-wrap: wrap;

      div.loading_recipes {
        grid-column: 4/22;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 0;

        p {
          font-size: 1.25rem;
          font-family: Poppins;
          color: ${theme.colors.orange};
          margin-right: 10px;
        }
      }

      li {
        margin-top: 20px;
        min-height: 400px;
        border-radius: 3px;
        background: transparent;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        position: relative;

        &:hover > div.image_recipe {
          filter: brightness(35%);
        }

        div.avaliation {
          background: ${theme.colors.white};
          display: flex;
          align-items: center;
          width: 80px;
          min-height: 35px;
          padding: 5px 0;
          border-radius: 3px;
          position: absolute;
          left: 20px;
          top: 20px;

          img {
            margin-left: 10px;
            width: auto;
            height: 17.5px;
            transform: translateY(-2px);
          }

          p {
            font-size: 1rem;
            font-family: Poppins;
            margin-left: 5px;
          }
        }

        div.info_recipe {
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px 0;

          div.name_recipe {
            padding: 0 20px;

            p {
              font-size: 1.75rem;
              font-family: Poppins;
              color: ${theme.colors.white};
            }
          }

          div.creator {
            display: flex;
            padding: 20px 20px 0 20px;
            align-items: center;

            img {
              width: 30px;
              height: 30px;
            }

            p {
              color: ${theme.colors.white};
              margin-left: 15px;
              font-size: 0.875rem;
              font-family: Poppins;
            }
          }
        }
      }

      li:nth-child(4n - 3) {
        grid-column: 3/8;
      }

      li:nth-child(4n - 2) {
        grid-column: 8/13;
      }

      li:nth-child(4n - 1) {
        grid-column: 13/18;
      }

      li:nth-child(4n - 4) {
        grid-column: 18/23;
      }
    }
  }

  div.more_recipes {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    padding: 20px 0;

    button {
      height: 50px;
      width: 250px;
      margin: 0 auto;
      border: none;
      border-radius: 3px;
      background: ${theme.colors.orange};
      color: white;
      font-size: 1.125rem;
      font-family: Poppins;
      box-shadow: 0 2px 5px ${theme.colors.blackWithMediumOpacity};
      transition: font-size 0.2s;

      &:hover {
        font-size: 1.25rem;
      }
    }
  }
`;

export const BackgroundRecipe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
  z-index: -10;
  border-radius: 3px;
  transition: filter 0.2s ease;
`;
