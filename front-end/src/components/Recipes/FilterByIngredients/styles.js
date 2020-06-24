import styled from "styled-components";

export const FilterByIngredient = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 0.4571429rem;
  margin-top: 3.5rem;
  background: white;
  border: 1px solid rgba(34, 36, 38, 0.15);
  height: 45px;
  transition: filter 0.1s;

  &:hover {
    filter: brightness(95%);
    cursor: pointer;
  }

  & img {
    width: 35px;
    height: auto;
    margin: 0 1rem 0 1.25rem;
  }
`;
