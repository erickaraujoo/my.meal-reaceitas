import styled from "styled-components";

import { theme } from './../../styles';

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.75rem;
    font-family: Poppins;
    color: ${theme.colors.darkRed};
    margin-right: 15px;
  }
`;
