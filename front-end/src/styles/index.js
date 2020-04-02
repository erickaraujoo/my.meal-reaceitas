import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html,
    body,
    #root {
        height: 100%;
    }
    body {
        font-family: Roboto, sans-serif;
        font-style: normal;
        line-height: 1.5;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased;
    }
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.75rem;
    }
    h3 {
        font-size: 1.35rem;
    }
    p{
        font-size: 1.10rem;
    }
    button{
        cursor: pointer;
        max-height: 50px;
        height: auto;
        transition: background-color 0.2s;
    }
    input {
        font-size: 1.05rem;
        color: rgba( 0, 0, 0, .87);
        padding: .67857143em 1em;
        border: 1px solid rgba(34,36,38,.15);
        border-radius: .28571429rem 0;
        box-shadow: none;
    }
`
export const InputSearch = styled.div`
    position: relative;
    display: inline-flex;
    width: ${props => props.width}%;
    height: 50px;
    margin-top: ${props => props.margin ? props.margin.top : '1.5em'};

    & input{
        flex: 1 0 auto;
        -webkit-tap-highlight-color: rgba(255,255,255,0);
        border-radius: .28571429rem 0 0 .28571429rem;
    }

    & button{
        display: flex;
        padding: 1.08571429em;
        border: none;
        background: #e0e1e2 none;
        color: rgba(0, 0, 0, .6);
        border-radius: 0 .28571429rem .28571429rem 0;
        -webkit-user-select: none;
        user-select: none;
    }

    & button:hover{
        background-color: #d2d2d2;
    }

    & button img {
        opacity: 0.7;
        height: 20px;
    }
`