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

      p.avaliation_notfound {
        width: 100%;
        padding: 80px 0 0;
        text-align: center;
        color: ${theme.colors.black};
        font-size: 1.25rem;
        font-family: Poppins;
      }
    }
  }
`;
