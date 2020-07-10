import styled, { createGlobalStyle } from "styled-components";

import Roboto from "./../assets/fonts/Roboto/Roboto-Regular.ttf";

import Poppins from "./../assets/fonts/Poppins/Poppins-Medium.ttf";
import PoppinsLight from "./../assets/fonts/Poppins/Poppins-Light.ttf";
import PoppinsSemiBold from "./../assets/fonts/Poppins/Poppins-SemiBold.ttf";
import PoppinsExtraBold from "./../assets/fonts/Poppins/Poppins-ExtraBold.ttf";
import PoppinsRegular from "./../assets/fonts/Poppins/Poppins-Regular.ttf";
import PoppinsItalic from "./../assets/fonts/Poppins/Poppins-Italic.ttf";
import PoppinsLightItalic from "./../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf";
import YellowtailRegular from "./../assets/fonts/Yellowtail/Yellowtail-Regular.ttf";
import ParisienneRegular from "./../assets/fonts/Parisienne/Parisienne-Regular.ttf";

export default createGlobalStyle`

    @font-face { font-family: PoppinsLightItalic; src: url(${PoppinsLightItalic}) };
    @font-face { font-family: PoppinsItalic; src: url(${PoppinsItalic}) };
    @font-face { font-family: PoppinsSemiBold; src: url(${PoppinsSemiBold}) };
    @font-face { font-family: PoppinsExtraBold; src: url(${PoppinsExtraBold}) };
    @font-face { font-family: PoppinsRegular; src: url(${PoppinsRegular}) };
    @font-face { font-family: Roboto; src: url(${Roboto}) };
    @font-face { font-family: Poppins; src: url(${Poppins}) };
    @font-face { font-family: PoppinsLight; src: url(${PoppinsLight}) };
    @font-face { font-family: YellowtailRegular; src: url(${YellowtailRegular}) };
    @font-face { font-family: ParisienneRegular; src: url(${ParisienneRegular}) };

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

export const theme = {
  colors: {
    blue: "#254b6e",
    blueCharchoal: "#24292d",
    pattensBlue: "#e0e1e2",
    darkOrange: "#F35E07",
    orange: "#F7834A",
    lightOrange: "#ff9901",
    darkRed: "#AB0310",
    red: "#D91900",
    green: "#B9BF07",
    oliveGreen: "#1b6b46",
    white: "#ffffff",
    black: "#000000",
    blackCharcoal: "#222426",
    nero: "#1a1a1a",
    gray: "#999999",
    limeade: "#69bf07",
    lightGray: "#d2d2d2",
    raven: "#6c757d",
    beige: "#F1F0EB",
    marsala: "#5e1b44",
    magnolia: "#F6F5F8",
    whiteSomke: "#F1F1F1",

    whiteWithMediumOpacity: "rgba(255, 255, 255, 0.5)",
    blackWithMediumOpacity: "rgba(0, 0, 0, 0.5)",
    blackWithGreatOpacity: "rgba(0, 0, 0, 0.15)",
    blackCharcoalWithMediumOpacity: "rgba(34, 36, 38, 0.15)",
    lightRavenWithGreatOpacity: "rgba(153, 153, 153, 0.2)",
    marsalaWithMediumOpacity: "rgba(94, 27, 68, 0.5)",
    marsalaWithGreatOpacity: "rgba(94, 27, 68, 0.2)",
  },
};
