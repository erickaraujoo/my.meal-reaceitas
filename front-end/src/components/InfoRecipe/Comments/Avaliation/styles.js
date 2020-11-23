import styled from "styled-components";

import { theme } from '../../../../styles';

export const SendFeedback = styled.form`
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
    margin-bottom: 10px;

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

  p.error {
    width: 100%;
    margin: 0px auto 50px auto;
    text-align: center;
    color: ${theme.colors.darkRed};
    font-size: 1.125rem;
    font-family: Poppins;
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
    margin-top: 10px;
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
`;
