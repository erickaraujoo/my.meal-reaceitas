import styled from "styled-components";

import { theme }  from '../../../styles';

export const OrderBy = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.4571429rem;
  margin-top: 1.5rem;
  background: ${theme.colors.white};
  /* border: 1px solid ${theme.colors.blackCharcoalWithMediumOpacity}; */
  padding: 0.35rem 1.25rem;
  height: 45px;
  box-shadow: 0 0 2px ${theme.colors.marsala};

  p {
    margin-right: 1em;
    font-family: Poppins;
    height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
  }

  select {
    width: calc(100% - 125px);
    height: auto;
    /* border: 1px solid ${theme.colors.blackWithGreatOpacity}; */
    border: none;
    border-radius: 0.4571429rem;
    color: rgba(0, 0, 0, 0.87);
    padding: 0.37857143em 0.25em ;
    padding-right: 0;
    cursor: pointer;
    font-size: 1rem;
    font-family: PoppinsRegular;
  }
`;
