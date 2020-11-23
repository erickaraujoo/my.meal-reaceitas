import styled from "styled-components";

import { theme }  from '../../../styles';

export const FilterByIngredient = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 0.4571429rem;
  margin-top: 3.5rem;
  background: ${theme.colors.white};
  /* border: 1px solid ${theme.colors.marsalaWithMediumOpacity}; */
  height: 45px;
  transition: filter 0.1s;
  box-shadow: 0 0 2px ${theme.colors.marsala};

  p {
    font-family: Poppins;
    font-size: 1rem;
    letter-spacing: 0.25px;
  }

  &:hover {
    filter: brightness(95%);
    cursor: pointer;
  }

  & img {
    width: 30px;
    height: auto;
    margin: 0 1rem 0 1.25rem;
    opacity: 0.8;
  }
`;
