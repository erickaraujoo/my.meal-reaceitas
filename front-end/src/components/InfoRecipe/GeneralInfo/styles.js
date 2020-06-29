import styled from "styled-components";

import { theme } from "./../../../styles";

export const Section = styled.section`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  h2 {
    grid-column: 4/22;
    font-size: 2.25rem;
    text-align: center;
    font-family: PoppinsExtraBold;
    opacity: 0.8;
    letter-spacing: 0px;

    &::after {
      content: "";
      display: flex;
      align-items: center;
      width: 250px;
      margin: 5px auto 0 auto;
      border: solid 3px ${theme.colors.marsala};
    }
  }

  div.info_recipe {
    grid-column: 7/19;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 30px;

    div.time,
    div.portion,
    div.views {
      display: flex;
      align-items: center;

      img {
        height: 35px;
        width: auto;
      }

      p {
        font-size: 1.125rem;
        font-family: Poppins;
        color: ${theme.colors.black};
        margin-left: 15px;
        margin-top: 5px;
      }
    }

    div.time {
      grid-column: 1/5;
      justify-content: flex-end;
    }

    div.portion {
      grid-column: 5/9;
      justify-content: center;
    }

    div.views {
      grid-column: 9/13;
      justify-content: flex-start;
    }
  }
`;
