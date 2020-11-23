import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 15px;
    }

    div.options {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.75rem;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
