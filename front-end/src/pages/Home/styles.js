import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10em 1.5em 0 1.5em;
`
export const Modal = styled.div`
    width: 100%;
    height: auto;
    background: #254B6E;
    border-radius: 15px;
    text-align: center;
    padding: 2em 1em;

    & h1{
        color: #fff;
    }

    & p {
        font-style: italic;
        font-size: 1rem;
        line-height: 1.5;
        color: #FFFFFF;
        margin-top: 1.5em
    }

    @media(min-width: 700px){
        width: 800px;
        height: 320px;
        padding: 2.2em 1em 3em 1em;

        & div{
            margin-top: 4.5em;
            max-width: 680px;
        }
    }
`