import styled from "styled-components";

import { theme } from "../../../styles";

export const Section = styled.section`
  grid-column: 4/22;
  min-height: 535px;
  height: auto;
  margin-top: 20px;
  padding: 50px 80px;
  background: ${theme.colors.white};
  box-shadow: 0px 1px 3px ${theme.colors.blackWithMediumOpacity};
  border-radius: 5px;

  div.title {
    width: 100%;
    height: auto;

    h3 {
      font-size: 1.375rem;
      font-family: PoppinsLight;
      line-height: 40px;
      letter-spacing: 0.35px;
    }
  }

  div.general_data {
    margin-top: 35px;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;

    div.image_recipe {
      width: 300px;

      div.title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          margin-right: 12px;
          width: 18.75px;
          height: 18.75px;
        }

        p {
          font-family: Poppins;
          line-height: 40px;
          letter-spacing: 0.35px;
          min-height: 20px;
          height: auto;
        }
      }

      div.load_image {
        width: 300px;
        height: 300px;
        max-width: 300px;
        max-height: 300px;
        margin-top: 15px;
        background: ${theme.colors.white};
        border: 1px dashed ${theme.colors.blackWithGreatOpacity};
        text-align: center;

        img {
          margin-top: 75px;
        }
        p {
          margin-top: 10px;
        }
      }
    }

    div.data_recipe {
      width: calc(100% - 350px);

      div.name_recipe {
        div.title {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          img {
            margin-right: 12px;
            width: 18.75px;
            height: 18.75px;
          }

          p {
            font-family: Poppins;
            line-height: 40px;
            letter-spacing: 0.35px;
            min-height: 20px;
            height: auto;
          }
        }

        input {
          width: 100%;
          height: 45px;
          margin-top: 15px;
          background: ${theme.colors.white};
          border: 0.5px solid ${theme.colors.blackWithGreatOpacity};
          box-sizing: border-box;
          border-radius: 5px;
          font-family: PoppinsLight;
          font-style: normal;
          font-size: 1rem;
          line-height: 40px;
          color: ${theme.colors.black};
        }
      }

      div.description_recipe {
        margin-top: 40px;

        div.title {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          img {
            margin-right: 12px;
            width: 25px;
            height: 25px;
          }

          p {
            font-family: Poppins;
            line-height: 40px;
            letter-spacing: 0.35px;
            min-height: 20px;
            height: auto;
          }
        }

        textarea {
          width: 100%;
          min-height: 160px;
          height: auto;
          resize: vertical;
          margin-top: 15px;
          font-family: PoppinsLight;
          font-style: normal;
          font-size: 1rem;
          line-height: 40px;
          color: ${theme.colors.black};
          background: ${theme.colors.white};
          border: 0.5px solid ${theme.colors.blackWithGreatOpacity};
          box-sizing: border-box;
          border-radius: 5px;
          padding: 5px 20px;
        }
      }
    }
  }
`;