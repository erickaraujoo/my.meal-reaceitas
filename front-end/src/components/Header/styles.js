import styled from "styled-components";

import { theme } from "../../styles";

export const Header = styled.header`
  width: 100%;
  min-height: 80px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 60px) repeat(8, 1fr) repeat(15, minmax(55px, 1fr));
  grid-column: ${(props) => (props.gridColumns ? props.gridColumns : null)};
  box-shadow: 0 2px 8px ${theme.colors.blackCharcoalWithMediumOpacity};
  position: relative;

  div.logo {
    grid-column: 2/10;
    display: flex;
    align-items: center;

    img {
      height: 50px;
    }
  }

  nav.navigations {
    grid-column: 10/24;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ul {
      display: flex;
      margin-top: 5px;

      a {
        text-decoration: none;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        height: 30px;
        cursor: pointer;

        p {
          padding: 0 20px;
          font-family: Poppins;
          font-size: 1rem;
          color: ${theme.colors.black};
          transition: font-size 0.1s;

          &:hover {
            font-size: 1.0625rem;
            color: ${theme.colors.orange};
          }
        }
      }

      li.profile {
        padding-left: 10px;

        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          border: solid 0.5px ${theme.colors.blackWithGreatOpacity};
        }
      }

      li.current p {
        font-size: 1.0625rem;
        color: ${theme.colors.orange};
      }
    }
  }
`;
