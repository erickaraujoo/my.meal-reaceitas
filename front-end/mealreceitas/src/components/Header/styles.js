import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 150px;
    height: auto;
    background: #254B6E;
    margin: 0;
    display: flex;
    align-items: flex-end;
`
export const Nav = styled.div`
    width: 100%;
    height: auto;
    font-family: sans-serif;
    font-size: 18px;
    border-bottom: solid 1px black;

    & ol {
        background: white;
        padding: 7.5px;
        display: flex;
        justify-content: space-around;
    }

    & li {
        color: black;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`

export const ImageLogo = styled.img`
    width: 120px;
    height: 120px;
    position: absolute;
`

export const ImageUser = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 5px;
`