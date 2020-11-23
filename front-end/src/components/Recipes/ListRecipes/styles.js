import styled from "styled-components";

import { theme } from "./../../../styles";

export const Recipe = styled.div`

  div.list_ingredients {
    display: flex;
    flex-wrap: wrap;

    div.ingredients {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 15px;
      background: ${theme.colors.white};
      border: 0.5px dashed ${theme.colors.black};
      border-radius: 50px;
      margin-bottom: 15px;
      margin-right: 10px;

      p {
        font-size: 0.875rem;
        color: ${theme.colors.black};
        font-family: Poppins;
      }

      img {
        cursor: pointer;
        margin-left: 10px;
        width: 20px;
        height: 20px;
      }
    }
  }
  
  ol {
    a { text-decoration: none; color: ${theme.colors.black} };

    li {
      margin-top: 1.5em;
      list-style: none;
      /* border: solid 2px ${theme.colors.marsala}; */
      border-radius: 10px;
      box-shadow: 0 0 5px ${theme.colors.blackWithMediumOpacity};
      transition: box-shadow 0.2s;
      cursor: pointer;
    }

    /* li + li { border: solid 2px rgba(0, 0, 0, .3) }; */

    li:hover {
      box-shadow: 0 0 12.5px ${theme.colors.blackWithMediumOpacity};
    }

    /* li div + div + div { padding: 1em }; */

    div.data-recipe,
    div.access-info {
      padding: 1em;
    }

    div.data-recipe {
      border-bottom: solid 1px ${theme.colors.blackWithGreatOpacity};
    }

    li div img.imgRecipe {
      width: 100%;
      height: 150px;
      border-radius: 8px 8px 0 0;
    }

    div.best-recipe {
      display: none;
    }

    li div.data-recipe {
      strong {
        font-size: 1.375rem;
        letter-spacing: 0.75px;
        font-family: PoppinsRegular;
      }

      p.description {
        font-size: 0.875rem;
        margin-top: 2em;
        text-align: justify;
        font-family: PoppinsRegular;
      }
      p.author {
        font-size: 0.875rem;
        font-style: italic;
        margin-top: 0.25em;
      }
    }

    li div.info-recipe {
      display: flex;
      justify-content: space-between;
      padding: 0.65em 1em 0 1em;

      div:first-child {
        display: none;
      }

      div + div {
        font-size: 0.75rem;
        letter-spacing: 0.5px;
      }

      div.date-info {
        p {
          font-size: 1em;
          font-weight: 0;
        }
        p + p {
          font-weight: bold;
        }
      }

      div.avaliation-info {
        display: flex;
        align-items: center;

        p {
          font-size: 0.875rem;
        }

        p.note-avaliation {
          font-size: 0.875rem;
          padding: 0.2em 0.45em;
          background-color: ${theme.colors.marsala};
          border-radius: 5px;
          color: ${theme.colors.white};
          font-weight: bold;
          margin-left: 0.45em;
        }
      }
    }

    @media (min-width: 1000px) {
      a:first-child li {
        margin-top: 0;
        div.image-recipe img {
          border-radius: 0 0 0 8px;
        }
      }

      li + li {
        margin-top: 1.5em;
      }

      li {
        display: grid;
        grid-template-columns:
          repeat(1, minmax(auto, 30%)) repeat(1, minmax(auto, 47.5%))
          repeat(1, minmax(auto, 22.5%));

        div.best-recipe {
          grid-column: 1/5;
          border-radius: 5px 5px 0 0;
          background-color: ${theme.colors.marsala};
          display: flex;
          align-items: center;
          padding: 0.5em 0.4em;

          img {
            width: 20px;
            height: 20px;
            margin-left: 0.5em;
          }

          p {
            color: ${theme.colors.white};
            margin-left: 0.5em;
            font-size: 1.0625em;
          }
        }

        div.image-recipe {
          width: 100%;
          height: 100%;
          grid-column: 1;
        }
        div.data-recipe {
          grid-column: 2;
          border: none;
        }

        div.info-recipe {
          grid-column: 3;
          display: block;
          padding: 1em;
          border-left: solid 1px ${theme.colors.blackWithGreatOpacity};

          div {
            width: 100%;
            text-align: right;
            margin-right: 35px;
          }

          div.favorite-info {
            padding-bottom: 1em;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            img {
              width: auto;
              height: 20px;
              margin-right: 10px;
            }

            p {
              font-size: 1em;
              letter-spacing: 0.5px;
            }
            p span {
              font-weight: bold;
            }
          }

          div.access-info {
            padding: 1em 0;
          }

          div.date-info {
            padding: 1em 0;
            p {
              font-weight: normal;
              font-size: 0.75rem;
            }
            p + p {
              color: ${theme.colors.marsala};
              font-weight: bold;
              font-size: 0.875rem;
              margin-top: 0.25em;
            }
          }

          div.avaliation-info {
            padding-top: 1em;
            justify-content: flex-end;
          }
        }
      }
    }
  }
`;

export const ImageRecipe = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px 8px 0 0;
  background-image: url(${(props) => props.background});
  background-size: cover;
  height: 150px;
  background-position: top;
  filter: brightness(80%);

  @media (min-width: 1000px) {
    background-position: center;
    height: 100%;
    border-radius: 8.5px 0 0 8.5px;
  }
`;
