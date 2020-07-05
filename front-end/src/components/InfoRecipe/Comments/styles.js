import styled from "styled-components";

import { theme } from "./../../../styles";

export const Section = styled.section`
  margin: 120px 0 100px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  h2 {
    grid-column: 1/25;
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

  div.send_feedback {
    grid-column: 4/22;
    margin-top: 50px;
    padding: 0 75px;

    p.avaliate {
      width: 100%;
      text-align: center;
    }

    div.rating_wrapper {
      display: flex;
      justify-content: center;
      direction: rtl;
      height: 50px;
      margin-bottom: 20px;

      input {
        display: none;
      }

      label {
        display: inline-block;
        width: 50px;
        position: relative;
        cursor: pointer;

        &:before {
          content: "\\2605";
          display: inline-block;
          position: absolute;
          font-size: 45px;
          top: -13px;
          left: 0;
          color: ${theme.colors.blackWithMediumOpacity};
          opacity: 0.25;
        }
      }

      label:hover:before,
      label:hover ~ label:before,
      input:checked ~ label:before {
        color: ${theme.colors.orange};
        opacity: 1;
      }
    }

    textarea.comment {
      width: 100%;
      min-height: 180px;
      resize: vertical;
      border-radius: 5px;
      border: none;
      box-shadow: 0px 0px 4px ${theme.colors.blackWithGreatOpacity};
      font-size: 1rem;
      font-family: PoppinsRegular;
      padding: 20px;
    }

    button {
      width: 200px;
      height: 40px;
      margin-top: 30px;
      border-radius: 5px;
      background: ${theme.colors.orange};
      color: ${theme.colors.white};
      font-size: 1.125rem;
      font-family: Poppins;
      border: none;

      &:hover {
        background: ${theme.colors.white};
        border: solid 2px ${theme.colors.orange};
        color: ${theme.colors.orange};
      }
    }
  }

  div.comments {
    grid-column: 4/22;
    padding: 100px 75px 80px;

    h3 {
      font-family: Poppins;
      font-size: 1.5rem;
      opacity: 0.8;
      letter-spacing: 1px;
    }

    ul {
      li {
        display: flex;
        justify-content: space-between;

        div.photo {
          width: 60px;
          height: auto;

          img {
            width: 100%;
            height: auto;
            border-radius: 50%;
            border: solid 1px ${theme.colors.blackCharcoalWithMediumOpacity};
          }
        }

        div.triangle {
          height: 0;
          width: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-right: 15px solid ${theme.colors.whiteSomke};
          position: relative;
          top: 18px;
          left: 7.5px;
        }

        div.comment {
          width: calc(100% - 90px);
          background: ${theme.colors.whiteSomke};
          flex-direction: column;
          padding: 20px 30px;

          div.title {
            display: flex;
            justify-content: space-between;

            p {
              font-size: 0.75rem;
              font-family: Poppins;
              color: rgba(0, 0, 0, 0.7);
            }

            div.avaliation {
              display: flex;
              justify-content: center;

              p {
                color: ${theme.colors.black};
              }

              img {
                height: 15px;
                width: auto;
                margin-left: 5px;
              }
            }
          }

          div.text {
            p {
              font-size: 1rem;
              margin-top: 10px;
              color: rgba(0, 0, 0, 0.85);
            }
          }
        }
      }

      li:first-child {
        margin-top: 50px;
      }

      li + li {
        margin-top: 30px;
      }
    }
  }
`;
