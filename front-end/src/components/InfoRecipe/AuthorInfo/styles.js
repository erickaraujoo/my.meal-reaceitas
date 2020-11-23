import styled from "styled-components";

import { theme } from "../../../styles";

export const Section = styled.section`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  div.info_author,
  div.image_recipe {
    min-height: 300px;
    height: auto;
    box-shadow: 0 1px 3px ${theme.colors.blackWithMediumOpacity};
  }

  div.info_author {
    grid-column: 13/22;
    border-radius: 0 5px 5px 0;
    padding: 30px 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div.author {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
      }

      h4 {
        margin-left: 20px;
        font-size: 1.125rem;
        font-family: PoppinsRegular;
      }
    }

    div.experience {
      padding-top: 15px;
      
      p {
        font-style: italic;
        font-family: PoppinsRegular;
        font-size: 0.875rem;
      }
    }

    div.author_recipes_info {
      width: 100%;
      display: flex;
      position: relative;
      top: 20px;

      div.created_recipes,
      div.total_views {
        display: flex;
        align-items: center;
        width: 50%;

        img {
          height: 20px;
          width: auto;
        }

        p {
          font-family: Poppins;
          font-size: 0.875rem;
          margin-left: 10px;
          transform: translateY(2px);
        }
      }

      div.created_recipes {
        justify-content: flex-end;
        padding-right: 15px;
      }

      div.total_views {
        justify-content: flex-start;
        padding-left: 15px;
      }

      div.created_recipes::after {
        content: "";
        border: 1px solid ${theme.colors.blackWithGreatOpacity};
        height: 100%;
        position: relative;
        left: 15px;
      }
    }

    div.visit_profile {
      button {
        width: 100%;
        height: 40px;
        font-family: Poppins;
        font-size: 1.125rem;
        border-radius: 5px;
        border: none;
        background: ${theme.colors.orange};
        color: ${theme.colors.white};
        transition: background 0.2s;

        &:hover {
          background: ${theme.colors.white};
          border: solid 1px ${theme.colors.orange};
          color: ${theme.colors.orange};
        }
      }
    }
  }

  div.image_recipe {
    grid-column: 4/13;
    border-radius: 5px 0 0 5px;
  }
`;

export const ImageRecipe = styled.div`
  background-image: url(${(props) => `'${props.background}'`});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;
