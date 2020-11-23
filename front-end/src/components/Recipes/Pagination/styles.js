import styled from "styled-components";

import { theme }  from './../../../styles';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 80px;

  div.pagination {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      border: 10px;
      box-sizing: border-box;
      display: inline-block;
      font-family: Roboto;
      font-weight: bold;
      -webkit-tap-highlight-color: ${theme.colors.white};
      cursor: pointer;
      text-decoration: none;
      margin: 0px;
      padding: 0px;
      outline: none;
      font-size: 0.875rem;
      position: relative;
      height: 36px;
      line-height: 36px;
      min-width: 36px;
      color: rgba(0, 0, 0, 0.87);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      border-radius: 2px;
      user-select: none;
      overflow: hidden;
      background: ${theme.colors.white};
      text-align: center;
      transition: background 0.3s;
      letter-spacing: 1px;

      img {
        width: auto;
        height: 12.5px;
      }

      img.arrow_image {
        opacity: 0.75;
      }

      &:hover {
        background: ${theme.colors.lightRavenWithGreatOpacity};
      }
    }

    button.button_current {
      color: ${theme.colors.red};
      font-family: Roboto;
    }
  }
`;
