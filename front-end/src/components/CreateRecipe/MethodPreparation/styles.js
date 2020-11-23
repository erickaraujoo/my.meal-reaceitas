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

  ul {
    li {
      padding: 15px 20px;
      background: ${theme.colors.white};
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
      list-style: none;
      display: flex;
      justify-content: space-between;

      div.text_method {
        width: 90%;
        height: auto;

        strong {
          font-size: 1.375rem;
          font-family: PoppinsSemiBold;
        }
        p {
          line-height: 40px;
          font-size: 1rem;
          text-align: justify;
        }
      }

      div.options {
        width: 10%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        img {
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
    }

    li:first-child {
      margin-top: 35px;
    }
    li + li {
      margin-top: 20px;
    }
  }
`;

export const InsertTopic = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  width: 210px;
  cursor: pointer;
  display: ${props => props.view ? 'none' : 'flex'};

  p {
    font-size: 1.125rem;
    font-family: Poppins;
  }
  img {
    margin-left: 15px;
    width: 30px;
    height: 30px;
  }
`;

export const FormMethodPreparation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  width: 100%;
  
  input { 
    width: calc(100% - 200px);
    margin-right: 30px;
    border-radius: 5px;
    font-size: 1rem;
    font-family: PoppinsRegular;
    height: 45px;
    letter-spacing: 0.25px;
  }

  button {
    font-size: 1rem;
    font-family: Poppins;
    color: ${theme.colors.white};
    height: 45px;
    width: 160px;
    border-radius: 3px;
    border: none;
    box-shadow: 0 2px 5px ${theme.colors.blackCharcoalWithMediumOpacity};
    transition: background 0.2s ease-in;
  }

  button.add {
    background: ${theme.colors.limeade};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.limeade};
      border: solid 1.5px ${theme.colors.limeade};
    }
  }

  button.cancel {
    background: ${theme.colors.darkRed};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.darkRed};
      border: solid 1.5px ${theme.colors.darkRed};
    }
  }
`;
