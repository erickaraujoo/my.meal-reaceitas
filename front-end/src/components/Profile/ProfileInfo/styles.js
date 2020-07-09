import styled from "styled-components";

import { theme } from "../../../styles";

export const Section = styled.div`
  grid-column: 4/22;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  div.section_personal_information,
  div.section_perfil {
    background: ${theme.colors.white};
    box-shadow: 0px 1px 3px ${theme.colors.blackWithMediumOpacity};
    border-radius: 5px;
    min-height: 350px;
    height: auto;
    width: 50%;
    padding: 35px 40px 30px 30px;

    div.title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: auto;

      h3 {
        font-size: 1.375rem;
        font-family: PoppinsRegular;
        line-height: 40px;
        letter-spacing: 0.35px;
      }

      img {
        width: 22.5px;
        height: 22.5px;
      }
    }

    ol {
      li {
        list-style: none;
        display: flex;
        align-items: center;
        min-height: 25px;
        height: auto;
        width: 100%;

        img {
          margin-right: 15px;
        }
        p {
          font-family: PoppinsRegular;
        }
      }

      li:first-child {
        margin-top: 40px;
      }
      li + li {
        margin-top: 30px;
      }

      li.li_description {
        margin-top: 40px;
        display: block;

        div.title {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-height: 25px;
          height: auto;
          width: 100%;

          img {
            width: auto;
            height: auto;
          }
        }

        div.description {
          margin-top: 20px;
          padding: 0 10px;

          textarea {
            width: 100%;
            min-height: 90px;
            height: auto;
            resize: none;
            border: none;
            text-align: justify;
            font-size: 0.875rem;
            line-height: 30px;
            font-family: Poppins;
          }
        }
      }
    }
  }

  div.section_personal_information {
    margin-right: 10px;
  }
  div.section_perfil {
    margin-left: 10px;
  }
`;
