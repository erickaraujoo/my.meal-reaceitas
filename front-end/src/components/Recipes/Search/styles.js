import styled from "styled-components";

import { theme } from '../../../styles';

export const InputSearch = styled.div`
  position: relative;
  display: inline-flex;
  width: ${(props) => props.width}%;
  height: ${(props) => (props.height ? props.height : "50px")};
  margin-top: ${(props) => (props.margin ? props.margin.top : "1.5em")};
  box-shadow: 0 0 2px ${theme.colors.marsala};
  border-radius: 0.4571429rem;

  & input {
    flex: 1 0 auto;
    /* -webkit-tap-highlight-color: ${theme.colors.white}; */
    border-radius: 0.4571429rem 0 0 0.4571429rem;
    border: none;
    font-family: PoppinsRegular;
    font-size: 1rem;
    max-height: 45px;
    letter-spacing: 0.25px;
  }

  & button {
    display: flex;
    padding: 0 1.08571429em;
    border: none;
    background: ${theme.colors.pattensBlue} none;
    border-radius: 0 0.4571429rem 0.4571429rem 0;
    -webkit-user-select: none;
    user-select: none;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${theme.colors.lightGray};
    }
  }

  & button img {
    opacity: 0.7;
    height: 17.5px;
  }
`;
