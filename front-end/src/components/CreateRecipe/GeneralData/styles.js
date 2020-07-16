import styled, { css } from "styled-components";

import { theme } from "../../../styles";

export const Section = styled.section`
  grid-column: 4/22;
  min-height: 535px;
  height: auto;
  margin-top: 20px;
  padding: 50px 80px;
  background: ${theme.colors.white};
  box-shadow: 0px 1px 3px ${theme.colors.blackWithMediumOpacity};
  border-radius: 5px;

  div.title {
    width: 100%;
    height: auto;

    h3 {
      font-size: 1.375rem;
      font-family: PoppinsLight;
      line-height: 40px;
      letter-spacing: 0.35px;
    }
  }

  div.general_data {
    margin-top: 35px;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;

    div.image_recipe {
      width: 300px;

      div.title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          margin-right: 12px;
          width: 18.75px;
          height: 18.75px;
        }

        p {
          font-family: Poppins;
          line-height: 40px;
          letter-spacing: 0.35px;
          min-height: 20px;
          height: auto;
        }
      }

      div.load_image {
        width: 300px;
        height: 300px;
        max-width: 300px;
        max-height: 300px;
        margin-top: 15px;
        background: ${theme.colors.white};
        border: 1px dashed ${theme.colors.blackWithGreatOpacity};
        text-align: center;

        img {
          margin-top: 75px;
        }
        p {
          margin-top: 10px;
        }
      }
    }

    div.data_recipe {
      width: calc(100% - 350px);

      div.name_recipe {
        div.title {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          img {
            margin-right: 12px;
            width: 18.75px;
            height: 18.75px;
          }

          p {
            font-family: Poppins;
            line-height: 40px;
            letter-spacing: 0.35px;
            min-height: 20px;
            height: auto;
          }
        }

        input {
          width: 100%;
          height: 45px;
          margin-top: 15px;
          background: ${theme.colors.white};
          border: 0.5px solid ${theme.colors.blackWithGreatOpacity};
          box-sizing: border-box;
          border-radius: 5px;
          font-family: PoppinsLight;
          font-style: normal;
          font-size: 1rem;
          line-height: 40px;
          color: ${theme.colors.black};
        }
      }

      div.description_recipe,
      div.observation_recipe {
        margin-top: 40px;

        div.title {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          img {
            margin-right: 12px;
            width: 25px;
            height: 25px;
          }

          p {
            font-family: Poppins;
            line-height: 40px;
            letter-spacing: 0.35px;
            min-height: 20px;
            height: auto;
          }
        }

        textarea {
          width: 100%;
          min-height: 160px;
          height: auto;
          resize: vertical;
          margin-top: 15px;
          font-family: PoppinsLight;
          font-style: normal;
          font-size: 1rem;
          line-height: 40px;
          color: ${theme.colors.black};
          background: ${theme.colors.white};
          border: 0.5px solid ${theme.colors.blackWithGreatOpacity};
          box-sizing: border-box;
          border-radius: 5px;
          padding: 5px 20px;
        }
      }
    }
  }
`;
const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  font-family: PoppinsRegular;
  font-size: 1rem;
`;

export const FileList = styled.ul`
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
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  div {
    width: calc(50% - 10px);

    div.title {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        margin-right: 12px;
        width: 25px;
        height: 25px;
      }

      p {
        font-family: Poppins;
        line-height: 40px;
        letter-spacing: 0.35px;
        min-height: 20px;
        height: auto;
      }
    }

    div.input {
      width: 100%;
      margin-top: 15px;
      display: flex;
      align-items: center;

      input {
        width: 60px;
        height: 40px;
        background: ${theme.colors.white};
        border: 0.5px solid ${theme.colors.blackWithGreatOpacity};
        box-sizing: border-box;
        border-radius: 5px;
        font-family: PoppinsLight;
        font-style: normal;
        font-size: 1rem;
        line-height: 40px;
        color: ${theme.colors.black};
        text-align: center;
        padding: 0 10px;
      }

      p {
        transform: translateY(2px);
        margin-left: 10px;
      }
    }
  }
`;
