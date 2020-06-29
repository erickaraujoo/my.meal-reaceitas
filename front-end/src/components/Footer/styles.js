import styled from "styled-components";

import { theme } from "./../../styles";

export const Container = styled.footer`
  grid-column: 1/25;
  height: auto;
  display: flex;
  flex-direction: column;

  div.info {
    display: flex;
    justify-content: space-around;
    background: ${theme.colors.marsala};
    padding: 50px 0 80px;

    div.logo {
      h3 {
        color: ${theme.colors.white};
        font-family: PoppinsRegular;
      }
    }

    p {
      color: ${theme.colors.white};
    }

    p.title {
      font-size: 1rem;
      font-family: Poppins;
    }

    ul {
      list-style: none;
      margin-top: 20px;

      li {
        margin: 10px 0;

        p {
          font-size: 0.875rem;
          font-family: PoppinsLight;
        }
      }
    }
  }

  div.copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 80px;
    background: ${theme.colors.magnolia};

    p {
      font-size: 0.875rem;
    }

    div.social_networks {
      display: flex;
      justify-content: center;

      img {
        margin: 0 15px;
        width: auto;
        height: 17.5px;
      }
    }
  }
`;
