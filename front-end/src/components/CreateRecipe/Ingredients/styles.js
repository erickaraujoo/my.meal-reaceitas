import styled from "styled-components";

import { theme } from "../../../styles";

export const Section = styled.section`
  grid-column: 4/22;
  min-height: 100px;
  height: auto;
  margin-top: 20px;
  padding: 50px 0px;
  background: ${theme.colors.white};
  box-shadow: 0px 1px 3px ${theme.colors.blackWithMediumOpacity};
  border-radius: 5px;

  div.title {
    padding: 0 80px;

    h3 {
      font-size: 1.375rem;
      line-height: 40px;
      letter-spacing: 0.35px;
      font-family: PoppinsLight;
      color: ${theme.colors.black};
    }
  }

  div.insert_ingredient {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding: 0 80px;

    p {
      font-size: 1.125rem;
      font-family: Poppins;
      line-height: 40px;
    }

    div.form {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 10px;

      input {
        width: 67.5%;
        margin-right: 5%;
        height: 45px;
        background: ${theme.colors.white};
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 5px;
        font-family: PoppinsRegular;
        font-size: 1rem;
      }

      button {
        width: 260px;
        height: 45px;
        background: ${theme.colors.limeade};
        border: none;
        border-radius: 5px;
        font-size: 1.125rem;
        color: ${theme.colors.white};
        font-family: Poppins;
        border-radius: 5px;
        transition: background 0.2s;

        &:hover {
          background: ${theme.colors.white};
          color: ${theme.colors.limeade};
          border: solid 1.5px ${theme.colors.limeade};
        }
      }
    }
  }

  div.ingredients {
    margin-top: 80px;
    padding: 30px 80px 0 65px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.15);
    display: flex;
    flex-wrap: wrap;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 15px;
      background: ${theme.colors.white};
      border: 0.5px dashed ${theme.colors.black};
      border-radius: 50px;
      margin-top: 20px;
      margin-left: 15px;

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
`;
