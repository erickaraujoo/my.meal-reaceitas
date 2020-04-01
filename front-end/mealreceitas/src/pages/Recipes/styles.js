import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: auto;
    margin: 5em 0 0 0;
    box-sizing: border-box;
    padding: 0 1.5em;

    & * {
        margin: 0;
        padding: 0;
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    }

    & h1, h2, h3 {
        line-height: 1.5;
    }

    & h1 {
        font-size: 2em;
        color: #254B6E;
    }

    & h3 {
        font-size: 1.35rem;
        font-weight: 400;
    }
`
export const TotalRecipes = styled.p`
    margin-top: 3em;
    font-size: 1.15rem;
    text-align: right;
`
export const FilterByIngredient = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    border-radius: .4571429rem;
    margin-top: 3.5rem;
    background: white;
    border: 1px solid rgba(34,36,38,.15);
    cursor: pointer;

    & img{
        width: 40px;
        height: auto;
        margin: 0.15rem 1.5rem 0.15rem 1.25rem;
    }

    & p{
        font-size: 1.25rem;
    }
`
export const OrderBy = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: .4571429rem;
    margin-top: 1.5rem;
    background: white;
    border: 1px solid rgba(34,36,38,.15);
    padding: 0.35rem 1.25rem;

    & p {
        font-size: 1.20rem;
        margin-right: 1em;
    }

    & select {
        width: calc(100% - 125px);
        height: auto;
        border: 1px solid rgba(34,36,38,.15);
        border-radius: .4571429rem;
        color: rgba( 0, 0, 0, .87);
        padding: .47857143em 1em;
        cursor: pointer;
    }
`
export const InputSearch = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    margin-top: 1.5em;

    & input{
        flex: 1 0 auto;
        outline: 0;
        -webkit-tap-highlight-color: rgba(255,255,255,0);
        line-height: 1.5;
        padding: .67857143em 1em;
        border: 1px solid rgba(34,36,38,.15);
        color: rgba( 0, 0, 0, .87);
        border-radius: .28571429rem 0 0 .28571429rem;
        box-shadow: none;
    }

    & button{
        cursor: pointer;    
        padding: .78571429em .78571429em .78571429em;
        border: none;
        background: #e0e1e2 none;
        color: rgba(0,0,0,.6);
        margin: 0 .25em 0 0;
        border-radius: 0 .28571429rem .28571429rem 0;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
    }

    & button:hover{
        background: #d2d2d2 none;
    }
`

export const ContainerCards = styled.div`
    width: 100%;
    margin-top: 3rem;
`

export const Category = styled.div`
    width: 100%;
    height: auto;
    background: #254B6E;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: .28571429rem;

    & div#titleCategory{
        display: flex;
        align-items: center;
        padding: .5rem 1em;
    }

    & img {
        width: 25px;
        height: auto;
        margin-right: 1rem;
    }

    & h3 {
        color: #ffffff;
    }
`

export const ListCategory = styled.ol`
    display: block;

    & li {
        list-style: none;
        background: #fff;
        padding: .5rem 1em;
        font-size: 1.10rem;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: solid 1px rgba(0, 0, 0, .15);
    }
`