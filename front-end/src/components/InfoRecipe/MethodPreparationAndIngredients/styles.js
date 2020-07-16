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
    height: auto;

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

      ::-webkit-scrollbar {
        width: 12.5px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
      }
    }

    div.method_preparation {
      min-height: 560px;
      max-height: 560px;
      position: relative;
      background: ${theme.colors.marsala};
      overflow: auto;

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

      p:nth-child(2) {
        text-align: right;
        font-size: 1rem;
        font-family: PoppinsRegular;
        width: calc(100% - 50px);
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.whiteWithMediumOpacity};
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.whiteSomke};
      }

      ::-webkit-scrollbar-track {
        background: ${theme.colors.blackWithGreatOpacity};
      }
    }

    div.ingredients {
      min-height: 600px;
      max-height: 600px;
      height: auto;
      position: relative;
      z-index: 100;
      background: ${theme.colors.white};
      overflow: auto;

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

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.marsala};
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
    }

    div.ingredient:nth-child(2),
    div.topic_method:nth-child(2) {
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

      p:nth-child(2) {
        text-align: right;
      }

      svg {
        padding: 7px 0;
      }
    }

    div.topic_method p {
      color: white;
    }

    div.topic_method p:first-child {
      font-size: 1.375rem;
    }

    div.topic_method p:nth-child(2), div.ingredient p {
      font-size: 0.875rem;
    }
  }
`;
