import styled from 'styled-components';

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
