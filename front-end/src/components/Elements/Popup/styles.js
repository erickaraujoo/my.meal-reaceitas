import styled from "styled-components";

import { theme } from "./../../../styles";

export const PopupUser = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: absolute;
  top: 85px;
  right: 50px;
  width: 280px;
  /* animation: ${(props) =>
    props.visible ? "setHeightPopup 0.15s ease-out" : ""}; */
  background: ${theme.colors.white};
  z-index: 100;
  border-radius: 3px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px ${theme.colors.blackWithGreatOpacity};

  div.my_profile {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    img {
      margin-top: 20px;
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }

    h4 {
      font-size: 1rem;
      font-family: PoppinsRegular;
      margin-top: 10px;
    }

    p {
      font-size: 0.75rem;
      font-family: PoppinsRegular;
      margin-top: 5px;
    }
  }

  hr {
    width: 100%;
    margin: 30px auto 0 auto;
    border: solid 0.5px ${theme.colors.whiteSomke};
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px 10px;

    li {
      display: flex;
      border-bottom: solid 0.25px ${theme.colors.blackWithGreatOpacity};
      width: 100%;
      padding: 20px 0;
      justify-content: flex-start !important;

      a { text-decoration: none; display: flex; width: 100% };

      p.title_popup {
        padding: 0px !important;
        margin-left: 10px;
        font-size: 0.875rem !important;
        font-family: PoppinsRegular !important;
      }

      svg.icon_popup {
        color: ${theme.colors.black};
      }

      a:hover > p.title_popup,
      a:hover > svg.icon_popup {
        color: ${theme.colors.orange} !important;
      }
    }

    li.exit {
      margin-top: 20px;
      border: none;

      p {
        padding: 0 !important;
        margin-left: 10px;
        color: ${theme.colors.darkRed} !important;
      }

      &:hover > p {
        font-size: 1.0625rem;
      }
      &:hover > svg {
        width: 17.5px;
        height: 17.5px;
      }
    }
  }

  /* @keyframes setHeightPopup {
    0% {
      height: 0px;
    }
    100% {
      height: 400px;
    }
  } */

  /* &::before {
    content: "";
    display: block;
    position: absolute;
    border-left: 12.5px solid transparent;
    border-right: 12.5px solid transparent;
    border-bottom: 17.5px solid ${theme.colors.orange};
    top: -17.5px;
    width: 0;
    height: 0;
    margin-left: auto;
    right: 10px;
  } */
`;
