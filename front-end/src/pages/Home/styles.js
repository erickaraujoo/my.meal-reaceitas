import styled from "styled-components";

import imgWallpaper from "./../../assets/home/wallpapers/wallpaper_home.jpg";

export const Container = styled.main`
  width: 100%;
  height: auto;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(24, 1fr);

    section.section_title_recipes {
      width: 100%;
      height: 150px;
      grid-column: 1/25;
      display: grid;
      grid-template-columns: repeat(24, 1fr);
      padding-top: 100px;
      align-items: center;
      background-color: #1a1a1a;

      hr {
        border: solid 1px white;
        height: 1px;
        opacity: 0.4;
      }
      hr:first-child {
        grid-column: 1/2;
      }
      hr:last-child {
        grid-column: 18/25;
      }

      h2 {
        color: #fff;
        font-size: 2rem;
        grid-column: 3/18;
      }
    }

    hr.hr_section {
      border: solid 0.5px rgba(0, 0, 0, 0.6);
      grid-column: 1/25;
    }
  }
`;

export const ImageBackgroundModal = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  filter: brightness(60%);
  width: 100%;
  min-height: 310px;
  height: auto;
  border-radius: 5px;
`;

export const SectionSearch = styled.section`
  height: 100%;
  text-align: center;
  min-height: 960px;
  height: auto;
  grid-column: 1/25;

  div.bg_image {
    position: absolute;
    z-index: -1;
    background-image: url(${imgWallpaper});
    background-size: cover;
    filter: brightness(50%);
    width: 100%;
    height: 960px;
  }

  h2 {
    color: white;
    font-size: 2rem;
    letter-spacing: 1.5px;
    font-family: PoppinsLight;
    padding-top: 350px;
    span {
      font-family: Poppins;
    }
  }

  div.search_recipe {
    margin-top: 90px;

    input {
      width: 670px;
      height: 60px;
      font-size: 1.4rem;
      font-family: PoppinsRegular;
    }

    button {
      width: 180px;
      min-height: 60px;
      margin-left: 30px;
      border: 0;
      background-color: #fff;
      font-size: 1.25rem;
      font-family: PoppinsSemiBold;
      color: #282828;
    }
  }
`;

export const SectionCategory = styled.section`
  grid-column: 4/22;
  padding-top: 100px;

  h2 {
    font-size: 2.5rem;
    color: #254b6e;
    text-align: center;
    font-family: Poppins;
  }

  p.subtitle {
    font-size: 1.25rem;
    font-style: italic;
    font-family: Poppins;
    margin-top: 20px;
    text-align: center;
  }

  div.hr_default {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    hr {
      width: 40%;
      opacity: 0.3;
    }
  }

  ul.list_category {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(18, 1fr);

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
    }
  }
`;

export const SectionModalRecipes = styled.section`
  width: 100%;
  height: auto;
  background-color: #1a1a1a;
  grid-column: 1/25;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  padding: 120px 0;

  div {
    grid-column: 3/23;
  }

  div.title_recipes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-family: PoppinsLightItalic;
      color: #fff;
      letter-spacing: 1px;
    }
  }

  ul {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    li {
      width: 20%;
      position: relative;
      list-style: none;
    }
  }

  div.trending_recipes div.modal_recipe {
    min-height: 310px;
    height: auto;
    p.title_recipe {
      bottom: 10px;
    }
  }

  div.recents_recipes div.views_recipe hr {
    width: calc(100% - 110px);
  }

  ul li div.modal_recipe {
    min-height: 355px;
    height: auto;

    img {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    p.title_recipe {
      position: absolute;
      bottom: calc(355px - 310px + 10px);
      width: calc(100% - 2px);
      height: auto;
      text-align: center;
      padding: 0 10px;
      color: white;
      font-family: PoppinsSemiBold;
      font-size: 1.25rem;
    }

    div.views_recipe {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      hr {
        width: calc(100% - 130px);
      }

      p {
        font-family: PoppinsRegular;
        font-size: 1rem;
        color: white;
        text-align: right;
        width: auto;
        letter-spacing: 0.5px;
      }
    }
  }
`;

export const SectionIngredients = styled.section`
  grid-column: 3/23;
  height: 900px;

  div.hr_decoration {
    position: absolute;
    right: 500px;

    hr {
      border: solid 0.25px rgba(26, 26, 26, 0.3);
      width: 250px;
      transform: rotate(129.29deg);
      margin-top: 95px;
    }
  }

  div.flex {
    width: 100%;
    height: 100%;
    display: flex;

    div.content_ingredients {
      margin-top: 220px;
      width: 100%;
      padding-right: 50px;

      h2 {
        font-size: 3rem;
        color: #254b6e;
        font-family: Poppins;
        letter-spacing: 1px;
      }

      p.subtitle {
        font-size: 1.35rem;
        font-family: PoppinsItalic;
        margin-top: 60px;
        line-height: 1.75;
        opacity: 0.8;
      }

      button {
        width: 400px;
        height: 75px;
        max-height: 100%;
        border-radius: 50px;
        border: solid 2px #254b6e;
        color: #254b6e;
        font-size: 1.5rem;
        font-family: PoppinsSemiBold;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin-top: 140px;

        img {
          margin-left: 20px;
        }
      }

      div.hr_decoration_bottom hr {
        border: solid 0.25px rgba(26, 26, 26, 0.3);
        width: 250px;
        transform: rotate(129.29deg);
        margin-top: 170px;
      }
    }

    div.image_ingredients {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 600px;
      img {
        height: 580px;
      }
    }
  }
`;

export const SectionFeedback = styled.section`
  grid-column: 1/25;
  background-color: #1a1a1a;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: 70px 30px;
  height: 780px;

  h2 {
    font-size: 2.6rem;
    color: #fff;
    text-align: center;
    font-family: Poppins;
    grid-column: 1/25;
    letter-spacing: 1px;
  }

  p.subtitle {
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    font-family: Poppins;
    text-align: center;
    color: #6c757d;
    grid-column: 1/25;
    margin-top: 10px;
  }

  form {
    grid-column: 3/23;
    margin-top: 100px;

    div.container_form {
      display: flex;

      div {
        width: 50%;
        height: auto;
      }

      div.inputs_form {
        display: block;
        text-align: right;
        margin-right: 20px;

        input {
          width: 85%;
          height: 60px;
          border-radius: 5px;
          font-family: PoppinsSemiBold;
          font-size: 1rem;
          color: #1a1a1a;
          letter-spacing: 0.5px;
        }

        input + input {
          margin-top: 25px;
        }
      }

      div.textarea_form {
        display: block;
        margin-left: 20px;

        textarea {
          width: 85%;
          height: 230px;
          border-radius: 5px;
          font-family: PoppinsSemiBold;
          font-size: 1rem;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          padding: 0.67857143em 1em;
        }
      }
    }

    button {
      width: 280px;
      height: 70px;
      max-height: 100%;
      background-color: transparent;
      border: solid 1px #fff;
      font-family: PoppinsSemiBold;
      font-size: 1.15rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      letter-spacing: 0.5px;
      margin: 80px auto 0 auto;
    }
  }
`;
