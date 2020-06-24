import styled, { createGlobalStyle } from "styled-components";

import Roboto from "./../assets/fonts/Roboto/Roboto-Light.ttf";

import Poppins from "./../assets/fonts/Poppins/Poppins-Medium.ttf";
import PoppinsLight from "./../assets/fonts/Poppins/Poppins-Light.ttf";
import PoppinsSemiBold from "./../assets/fonts/Poppins/Poppins-SemiBold.ttf";
import PoppinsRegular from "./../assets/fonts/Poppins/Poppins-Regular.ttf";
import PoppinsItalic from "./../assets/fonts/Poppins/Poppins-Italic.ttf";
import PoppinsLightItalic from "./../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf";

export default createGlobalStyle`

    @font-face { font-family: PoppinsLightItalic; src: url(${PoppinsLightItalic}) };
    @font-face { font-family: PoppinsItalic; src: url(${PoppinsItalic}) };
    @font-face { font-family: PoppinsSemiBold; src: url(${PoppinsSemiBold}) };
    @font-face { font-family: PoppinsRegular; src: url(${PoppinsRegular}) };
    @font-face { font-family: Roboto; src: url(${Roboto}) };
    @font-face { font-family: Roboto; src: url(${Roboto}) };
    @font-face { font-family: Poppins; src: url(${Poppins}) };
    @font-face { font-family: PoppinsLight; src: url(${PoppinsLight}) };

    * { margin: 0; padding: 0; box-sizing: border-box; outline: 0 };

    html, body, #root { height: auto };
    html { font-size: 16px };
    
    body {
        font-family: Poppins, sans-serif;
        font-style: normal;
        line-height: 1.5;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased;
    }

    h1 { font-size: 2rem; letter-spacing: 1.25px };
    h2 { font-size: 1.5rem };
    h3 { font-size: 1.25rem };
    
    p { font-size: 1rem };

    button{
    		cursor: pointer;
        max-height: 50px;
        height: auto;
        transition: background-color 0.2s;
    }

    input {
        font-size: 1rem;
        color: rgba( 0, 0, 0, .87);
        padding: .67857143em 1em;
        border: 1px solid rgba(34,36,38,.15);
        box-shadow: none;
    }
`;

export const InputSearch = styled.div`
  position: relative;
  display: inline-flex;
  width: ${(props) => props.width}%;
  height: 50px;
  margin-top: ${(props) => (props.margin ? props.margin.top : "1.5em")};

  & input {
    flex: 1 0 auto;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    border-radius: 0.28571429rem 0 0 0.28571429rem;
  }

  & button {
    display: flex;
    padding: 0 1.08571429em;
    border: none;
    background: #e0e1e2 none;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 0 0.28571429rem 0.28571429rem 0;
    -webkit-user-select: none;
    user-select: none;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #d2d2d2;
    }
  }

  & button img {
    opacity: 0.7;
    height: 17.5px;
  }
`;
