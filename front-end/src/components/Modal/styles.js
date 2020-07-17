import styled from "styled-components";

import { theme } from "../../styles";

export const Section = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: ${theme.colors.blackWithMediumOpacity};
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionModalIngredients = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: ${theme.colors.blackWithMediumOpacity};
  z-index: 100;
  top: 0;
  left: 0;

  div.modal_ingredients {
    position: absolute;
    width: 75%;
    height: auto;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 0 5px ${theme.colors.blackWithMediumOpacity};

    div.title {
      display: flex;
      justify-content: space-between;
      padding: 30px 80px 0;

      h2 {
        font-size: 1.5rem;
        font-family: PoppinsExtraBold;
        opacity: 0.8;
        color: ${theme.colors.black};
      }

      img {
        min-width: 35px;
        width: 35px;
        min-height: 35px;
        height: 35px;
        position: relative;
        left: 65px;
        bottom: 15px;
        cursor: pointer;
      }
    }

    div.insert_ingredient {
      margin-top: 60px; 
      padding: 0 80px 50px;
      margin-top: 80px;
      border-bottom: solid 0.25px ${theme.colors.blackCharcoalWithMediumOpacity}; 

      div.form {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;

        input {
          width: calc(100% - 310px);
          height: 40px;
          background: ${theme.colors.white};
          border: 0.5px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          border-radius: 5px;
          font-family: PoppinsRegular;
          font-size: 1rem;
        }

        button {
          width: 260px;
          height: 40px;
          background: ${theme.colors.orange};
          border: none;
          border-radius: 5px;
          font-size: 1.125rem;
          color: ${theme.colors.white};
          font-family: Poppins;
          border-radius: 5px;
          transition: background 0.2s;
          /* box-shadow: 0 2px 5px ${theme.colors.blackWithGreatOpacity}; */

          &:hover {
            background: ${theme.colors.white};
            color: ${theme.colors.orange};
            border: solid 1.5px ${theme.colors.orange};
          }
        }
      }
    }

    div.ingredients {
      padding: 30px 80px 50px 60px;
      display: flex;
      flex-wrap: wrap;
      max-height: 300px;
      overflow: auto;
      
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

    div.send_recipes {
      padding: 30px 80px 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
          width: 350px;
          height: 45px;
          background: ${theme.colors.orange};
          border: none;
          border-radius: 5px;
          font-size: 1.25rem;
          color: ${theme.colors.white};
          font-family: Poppins;
          border-radius: 5px;
          transition: background 0.2s;

          &:hover {
            background: ${theme.colors.white};
            color: ${theme.colors.orange};
            border: solid 1.5px ${theme.colors.orange};
          }
        }
    }
  }
`;

export const DivModalSuccess = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => (props.padding ? props.padding : null)};
  background: ${theme.colors.white};
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-family: PoppinsSemiBold;
    font-size: 2rem;
    color: ${theme.colors.limeade};
    letter-spacing: 0.25px;
  }

  p {
    margin-top: 60px;
    font-size: 1.125rem;
    font-family: Poppins;
    text-align: center;
  }

  h2.title_error {
    color: ${theme.colors.orange};
  }

  a,
  button.close_modal {
    margin-top: 60px;
  }

  button {
    width: ${(props) => (props.widthButton ? props.widthButton : null)};
    height: ${(props) => (props.heightButton ? props.heightButton : null)};
    border-radius: 5px;
    border: none;
    background: ${theme.colors.limeade};
    font-size: 1.25rem;
    color: ${theme.colors.white};
    font-family: Poppins;
    text-transform: uppercase;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${theme.colors.white};
      border: solid 1.5px ${theme.colors.limeade};
      color: ${theme.colors.limeade};
    }
  }

  button.close_modal {
    background: ${theme.colors.orange};

    &:hover {
      background: ${theme.colors.white};
      border: solid 1.5px ${theme.colors.orange};
      color: ${theme.colors.orange};
    }
  }
`;
