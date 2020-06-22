import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  div.pagination {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      border: 10px;
      box-sizing: border-box;
      display: inline-block;
      font-family: Poppins;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      text-decoration: none;
      margin: 0px;
      padding: 0px;
      outline: none;
      font-size: 1rem;
      font-weight: inherit;
      position: relative;
      height: 36px;
      line-height: 36px;
      min-width: 36px;
      color: rgba(0, 0, 0, 0.87);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      border-radius: 2px;
      user-select: none;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0);
      text-align: center;
      transition: background .2s;
      letter-spacing: 1px;

      img {
        width: auto;
        height: 12.5px;
      }

      &:hover { 
        background: rgba(153, 153, 153, 0.2);
      }
    }

    button.button_current {
      color: #254b6e;
    }
  }
`;
