import styled from "styled-components";

import { theme } from "./../../../styles";

export const Section = styled.section`
  grid-column: 4/22;
  margin-top: 20px;
  background: ${theme.colors.white};
  box-shadow: 0px 1px 3px ${theme.colors.blackWithMediumOpacity};
  border-radius: 5px;
  height: auto;
  padding: 35px 45px 80px;
  margin-bottom: 100px;

  div.title {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1.375rem;
      font-family: PoppinsLight;
    }

    img {
      width: 30px;
      height: 30px; 
      transition: 0.2s;

      &:hover {
        width: 32.5px;
        height: 32.5px;
        transform: translate(1.5px, -1.5px);
      }
    }
  }

  ul {
    a { text-decoration: none; color: ${theme.colors.black} }

    li {
      list-style: none;
      min-height: 70px;
      height: auto;
      background: ${theme.colors.white};
      box-shadow: 0px 1px 2px ${theme.colors.blackWithMediumOpacity};
      display: flex;
      align-items: center;
      padding: 0 30px;

      div.image {
        width: 5%;
        height: 40px;

        img {
          width: 40px;
          height: 100%;
          border-radius: 50%;
          font-size: 0.75rem;
        }
      }

      p {
        font-family: PoppinsLight;
        line-height: 40px;
        letter-spacing: 0.35px;
        min-height: 20px;
        height: auto;
      }

      p + p {
        text-align: center;
      }

      p.name {
        font-family: Poppins;
        margin-left: 30px;
        width: 25%;
        min-height: 20px;
        height: auto;
      }

      p.date {
        width: 22%;
      }
      p.hits {
        width: 17%;
      }
      p.favorites {
        width: 17%;
      }

      div.options {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 14%;

        img.edit {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
        img.delete {
          width: 27.5px;
          height: 27.5px;
        }
      }
    }

    li:first-child {
      margin-top: 50px;
    }
    li + li {
      margin-top: 20px;
    }

    p.recipes_notfound {
      width: 100%;
      padding: 80px 0 50px;
      text-align: center;
      color: ${theme.colors.black};
      font-size: 1.25rem;
      font-family: Poppins;
    }
  }
`;
