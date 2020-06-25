import styled from "styled-components";

import { theme }  from './../../../styles';

export const OrderBy = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.4571429rem;
  margin-top: 1.5rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.blackCharcoalWithMediumOpacity};
  padding: 0.35rem 1.25rem;
  height: 45px;

  p {
    margin-right: 1em;
  }

  select {
    width: calc(100% - 125px);
    height: auto;
    border: 1px solid ${theme.colors.blackCharcoalWithMediumOpacity};
    border-radius: 0.4571429rem;
    color: rgba(0, 0, 0, 0.87);
    padding: 0.37857143em 1em;
    cursor: pointer;
    font-size: 1rem;
  }
`;
