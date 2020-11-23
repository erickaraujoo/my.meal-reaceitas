import styled from "styled-components";

import { theme } from "../../../styles";

export const Section = styled.section`
  grid-column: 4/22;
  min-height: 100px;
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

  div.category {
    width: 100%;
    height: auto;
    margin-top: 45px;
    display: flex;
    justify-content: space-between;

    div.select_category {
      width: 50%;
      height: auto;

      div.multi-select {
        width: 80%;
        height: 45px;

        div.dropdown {
          height: inherit;

          div.dropdown-heading {
            height: inherit !important;
            border: 1px solid rgba(34, 36, 38, 0.15) !important;

            span {
              display: flex;
              align-items: center;
              font-size: 1rem;
              font-family: PoppinsRegular;
            }
          }
        }
      }
    }

    div.list_category {
      width: 50%;
      height: auto;

      p.title {
        min-height: 45px;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 15px;
        font-size: 1.125rem;
      }

      ul {
        display: flex;
        margin-top: 10px;
        flex-wrap: wrap;

        li {
          list-style: none;
          margin-left: 15px;
          margin-top: 10px;
          background: ${theme.colors.pattensBlue};
          padding: 5px 20px;
          border-radius: 20px;

          p {
            font-size: 0.875rem;
            font-family: Poppins;
          }
        }
      }
    }
  }
`;
