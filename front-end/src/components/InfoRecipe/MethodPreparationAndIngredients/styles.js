import styled from "styled-components";

import { theme } from "../../../styles";

export const Section = styled.section`
  margin-top: 120px;
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

  div.container {
    grid-column: 4/22;
    display: flex;
    align-items: center;
    margin-top: 80px;
    height: 700px;

    div.method_preparation,
    div.ingredients {
      width: 50%;
      box-shadow: 0px 0px 5px ${theme.colors.blackWithMediumOpacity};
      padding: 50px;

      h3 {
        font-family: PoppinsRegular;
        letter-spacing: 1px;
        font-size: 1.75rem;

        &::after {
          content: "";
          display: flex;
          align-items: center;
          width: 100%;
          margin: 10px auto 0 auto;
        }
      }

      div.pagination {
        width: 100%;
        height: 70px;
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0px;
        background: ${theme.colors.blackCharcoalWithMediumOpacity};
      }
    }

    div.method_preparation {
      min-height: calc(100% - 140px);
      max-height: 660px;
      position: relative;
      background: ${theme.colors.marsala};

      h3 {
        color: ${theme.colors.white};

        &::after {
          border: 0;
          height: 0.5px;
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.75),
            rgba(0, 0, 0, 0)
          );
        }
      }
    }

    div.ingredients {
      min-height: calc(100% - 100px);
      max-height: 700px;
      position: relative;
      z-index: 100;
      background: ${theme.colors.white};

      h3 {
        color: ${theme.colors.black};

        &::after {
          border: 0;
          height: 0.5px;
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0)
          );
        }
      }
    }

    div.ingredient:nth-child(2), div.topic_method:nth-child(2) {
      margin-top: 15px;
    }

    div.ingredient,
    div.topic_method {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;

      p {
        letter-spacing: 0.25px;
      }

      p:first-child {
        width: 50px;
        letter-spacing: 1px;
        font-size: 1.125rem;
        font-family: PoppinsSemiBold;
        opacity: 0.8;
      }

      p:nth-child(2) {
        text-align: right;
        font-size: 1rem;
        font-family: PoppinsRegular;
        width: calc(100% - 50px);
      }
    }

    div.topic_method p {
      color: white;
    }

    div.topic_method p:first-child {
      font-size: 1.375rem;
    }

    div.topic_method p:nth-child(2) {
      font-size: 0.875rem;
    }
  }
`;
