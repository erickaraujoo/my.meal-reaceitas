import styled from "styled-components";

export const Category = styled.div`
    width: 100%;
    height: auto;
    background: #254B6E;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: .28571429rem;

    @media(min-width: 700px) { grid-column: 1 };

    div#titleCategory{ display: flex; align-items: center; padding: .5rem 1em };

    img { width: 25px; height: auto; margin-right: 1rem };

    p { color: #fff; font-size: 1.25rem };

    ol.list-category{
        display: block;

        li {
            list-style: none;
            background: #fff;
            padding: 1em;
            font-size: 1rem;
            height: 50px;
            display: flex;
            align-items: center;
            border-bottom: solid 1px rgba(0, 0, 0, .15);
            transition: filter 0.1s;
        }

        li:last-child { border-radius: 0 0 .28571429rem .28571429rem }; 

        li:hover { filter: brightness(95%); cursor: pointer };
    }
`;
