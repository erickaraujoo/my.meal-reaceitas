import styled from "styled-components";

import { theme } from "./../../../styles";

export const Section = styled.section`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  div.info_author, div.image_recipe {
    min-height: 300px;
    height: auto;
    box-shadow: 0 1px 3px ${theme.colors.blackWithMediumOpacity};
  }

  div.info_author {
    grid-column: 13/22;
    border-radius: 0 5px 5px 0;
  }

  div.image_recipe {
    grid-column: 4/13;
    border-radius: 5px 0 0 5px;
  }
`;

export const ImageRecipe = styled.div`
  background-image: url(${props => `'${props.background}'`});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;

`;
