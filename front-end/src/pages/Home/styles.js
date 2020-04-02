import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url('https://previews.123rf.com/images/seamartini/seamartini1608/seamartini160800130/61439643-fast-food-snacks-drinks-and-desserts-seamless-pattern-background-wallpaper-with-color-sketch-icons-o.jpg');
    background-size: contain; */
`

export const Modal = styled.div`
    width: 55%;
    min-height: 320px;
    height: auto;
    background: #254B6E;
    border-radius: 15px;
    text-align: center;

    & h2 {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        margin-top: 35px;
        color: #FFFFFF;
    }

    & p {
        font-family: sans-serif;
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: #FFFFFF;
        margin-top: 20px
    }
`

export const Search = styled.div`
    width: 85%;
    height: 50px;
    background: white;
    margin: 75px auto 60px auto;
    border-radius: 10px;
    border: none;
    display: flex;

    & input {
        font-family: sans-serif;
        font-size: 20px;
        text-indent: 2ch;
        width: 92%;
        border: none;
        border-radius: 10px 0 0 10px;
    } 

    & img {
        width: 8%;
        height: 50px;
        margin-left: 10px;
        padding: 12px 13px;
        border-left: solid 1px rgba(0, 0, 0, .3);
        cursor: pointer;
        opacity: 0.8;
    }
`