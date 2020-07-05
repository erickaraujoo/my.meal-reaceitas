import styled from "styled-components";

import { theme } from "../../styles";

export const Header = styled.header`
  width: 100%;
  min-height: 80px;
  height: auto;
  /* background: ${theme.colors.marsala}; */
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column: ${(props) => (props.gridColumns ? props.gridColumns : null)};
  box-shadow: 0 2px 8px ${theme.colors.blackCharcoalWithMediumOpacity};

  div.logo {
    grid-column: 2/10;
    display: flex;
    align-items: center;

    p {
      color: ${theme.colors.black};
      font-size: 1.5rem;
      font-family: PoppinsSemiBold;
    }
  }

  nav.navigations {
    grid-column: 11/24;
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

      li.current p {
        font-size: 1.0625rem;
        color: ${theme.colors.orange};
      }
    }
  }
`;
