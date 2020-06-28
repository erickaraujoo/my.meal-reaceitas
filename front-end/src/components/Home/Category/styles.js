import styled from 'styled-components';

import { theme } from './../../../styles';

export const Category = styled.section`
  grid-column: 4/22;
  margin-top: 100px;
  padding: 50px 0 80px;
  background: #f2f5fa;

  h2 {
    font-size: 2.125rem;
    color: ${theme.colors.black};
    opacity: 0.8;
    text-align: center;
    font-family: PoppinsSemiBold;
  }

  p.subtitle {
    font-size: 1rem;
    font-family: PoppinsRegular;
    text-align: center;
    margin-top: 5px;
  }

  ul.list_category {
    margin-top: 50px;
    display: flex;
    justify-content: center;

    a { text-decoration: none };

    li { 
      margin: 0 10px;
      background-color: #eb7268;
      width: 130px;
      padding: 25px 10px;
      height: auto;
      display: flex;
      border-radius: 10px;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 0 2px ${theme.colors.blackWithMediumOpacity};
      transition: box-shadow 0.15s;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 5px ${theme.colors.black};
      }

      img {
        width: auto;
        min-width: 70px;
        height: 70px;
      }

      p {
        margin-top: 15px;
        font-family: PoppinsRegular;
        font-size: 1rem;
        color: ${theme.colors.white};
        text-decoration: none;
      }
    }





/* 
    li {
      list-style: none;
      margin-top: 50px;
    }
    li:nth-child(3n - 2) {
      grid-column: 1/5;
    }
    li:nth-child(3n - 1) {
      grid-column: 8/12;
    }
    li:nth-child(3n) {
      grid-column: 15/19;
    }

    li div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li div.image_category {
      width: 100%;
      height: 140px;
      border: solid 1px rgba(0, 0, 0, 0.35);
      border-radius: 5px 5px 0 0;

      img {
        height: 80px;
        width: auto;
      }
    }

    li div.text_category {
      width: 100%;
      height: 50px;
      border-left: solid 1px rgba(0, 0, 0, 0.35);
      border-right: solid 1px rgba(0, 0, 0, 0.35);
      border-bottom: solid 1px rgba(0, 0, 0, 0.35);
      border-radius: 0 0 5px 5px;

      p {
        font-size: 1.25rem;
      }
    } */
  }
`;