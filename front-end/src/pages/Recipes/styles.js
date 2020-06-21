import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1.5em;
  margin-bottom: 100px;

  h1 {
    color: #254b6e;
  }

  p.pTotal-recipes {
    margin-top: 3em;
    font-size: 1.15rem;
    text-align: right;
  }

  @media (min-width: 1000px) {
    padding: 0;
    display: grid;
    grid-template-columns:
      1fr repeat(1, minmax(auto, 300px)) repeat(1, minmax(auto, 420px))
      repeat(1, minmax(auto, 340px)) 1fr;
    column-gap: 2em;

    div.blue_background {
      grid-column: 1/6;
      width: 100%;
      height: 100px;
      background-color: #254b6e;
    }

    h1 {
      grid-column: 2/5;
      margin-top: 100px;
    }

    p.pTotal-recipes {
      grid-column: 2/5;
    }

    section.section-data-classification {
      grid-column: 2/5;

      div.content-wrap {
        display: grid;
        grid-template-columns:
          repeat(1, minmax(auto, 300px)) repeat(1, minmax(auto, 420px))
          repeat(1, minmax(auto, 340px));
        column-gap: 2em;
      }

      div.filter-ingredients {
        grid-column: 1;
        width: 100%;
        margin-top: 1.5em;
      }
      div.order-by {
        grid-column: 2;
        width: 100%;
      }
      div.input-search {
        grid-column: 3;
        width: 100%;
      }
    }

    section.section-category-cards {
      grid-column: 2/5;

      div.content-wrap {
        display: grid;
        grid-template-columns: repeat(1, minmax(auto, 300px)) repeat(
            1,
            minmax(auto, 760px)
          );
        column-gap: 2em;
      }
    }
  }

  section.section_recipes {
    width: 100%;
    grid-column: 3/5;
    margin-top: 3em;
  }
`;

export const OrderBy = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.4571429rem;
  margin-top: 1.5rem;
  background: white;
  border: 1px solid rgba(34, 36, 38, 0.15);
  padding: 0.35rem 1.25rem;
  height: 45px;

  p {
    margin-right: 1em;
  }

  select {
    width: calc(100% - 125px);
    height: auto;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 0.4571429rem;
    color: rgba(0, 0, 0, 0.87);
    padding: 0.37857143em 1em;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const ContainerCategory = styled.section`
  width: 100%;
  grid-column: 2;
  margin-top: 3rem;
`;

export const ImageRecipe = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px 8px 0 0;
  background-image: url(${(props) => props.background});
  background-size: cover;
  height: 150px;
  background-position: top;
  filter: brightness(80%);

  @media (min-width: 1000px) {
    background-position: center;
    height: 100%;
    border-radius: 8.5px 0 0 8.5px;
  }
`;
