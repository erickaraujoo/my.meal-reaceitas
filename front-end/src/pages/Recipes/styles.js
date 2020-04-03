import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: auto;
    margin: 5em 0 0 0;
    padding: 0 1.5em;

    & h1{
        color: #254B6E;
    }

    & p.pTotal-recipes{
        margin-top: 3em;
        font-size: 1.15rem;
        text-align: right;
    }

    @media(min-width: 1000px) {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(1, minmax(auto, 40px)) repeat(1, minmax(auto, 300px)) repeat(1,minmax(auto, 420px)) repeat(1,minmax(auto, 340px)) 1fr;
        column-gap: 2em;

        & h1{
            grid-column: 2/5;
        }

        & p.pTotal-recipes{
            grid-column: 2/5;
        }

        & section.section-data-classification {
            grid-column: 2/5;

            & div.content-wrap {
                display: grid;
                grid-template-columns: repeat(1, minmax(auto, 300px)) repeat(1,minmax(auto, 420px)) repeat(1,minmax(auto, 340px));
                column-gap: 2em;
            }

            & div.filter-ingredients {
                grid-column: 1;
                width: 100%;
                margin-top: 1.5em;
            }

            & div.order-by{
                grid-column: 2;
                width: 100%;
            }

            & div.input-search{
                grid-column: 3;
                width: 100%;
            }
        }

        & section.section-category-cards {
            grid-column: 2/5;

            & div.content-wrap {
                display: grid;
                grid-template-columns: repeat(1, minmax(auto, 300px)) repeat(1,minmax(auto, 760px));
                column-gap: 2em;
            }
        }

        & div.card-container{
            grid-column: 2/5;
        }
    }
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
    height: 50px;

    & img{
        width: 40px;
        height: auto;
        margin: 0.15rem 1.5rem 0.15rem 1.25rem;
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
    height: 50px;

    & p {
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
        font-size: 1rem;
    }
`
export const ContainerCards = styled.section`
    width: 100%;
    margin-top: 3rem;

    & div.card-container{
        width: 100%;
        height: auto;

        & ol {
            & li {
                margin-top: 1.5em;
                list-style: none;
                border: solid 2px #254B6E;
                border-radius: 10px;
                box-shadow: 0 0 5px rgba(0, 0, 0, .5);
                transition: box-shadow 0.2s;
                cursor: pointer;
            }

            & li:hover{
                box-shadow: 0 0 12.5px rgba(0, 0, 0, .5);
            }

            & li div + div + div {
                padding: 1em;
            }

            & li div img.imgRecipe{
                width: 100%;
                height: 150px;
                border-radius: 8px 8px 0 0;
            }

            & div.best-recipe{
                display: none;
            }

            & li div.data-recipe {
                border-bottom: solid 1px rgba(0, 0, 0, .15);

                & strong {
                    font-size: 1.35rem;
                }

                & p.description {
                    font-size: 1rem;
                    margin-top: 1em;
                    text-align: justify;
                }

                & p.author {
                    font-size: 0.85rem;
                    font-style: italic;
                }
            }

            & li div.info-recipe {
                display: flex;
                justify-content: space-between;
                padding: 0.65em 1em 0 1em;

                & div:first-child {
                    display: none;
                }

                & div + div {
                    padding: 1em;
                    font-size: 0.8rem;
                }

                & div.date-info {
                    & p{
                        font-size: 1em;
                        font-weight: 0;
                    }

                    & p + p {
                        font-weight: bold;
                    }
                }

                & div.avaliation-info {
                    display: flex;
                    align-items: center;

                    & p.note-avaliation{
                        font-size: 0.85rem;
                        padding: 0.2em .45em;
                        background-color: #254B6E;
                        border-radius: 5px;
                        color: white;
                        font-weight: bold;
                        margin-left: .45em;
                    }
                }
            }

            @media(min-width: 1000px) {

                & li:first-child {
                    margin-top: 0;
                }

                & li + li {
                    margin-top: 1.5em;
                }

                & li {
                    display: grid;
                    grid-template-columns: repeat(1, minmax(auto, 30%)) repeat(1, minmax(auto, 47.5%)) repeat(1, minmax(auto, 22.5%));

                    & div.best-recipe{
                        grid-column: 1/4;
                        border-radius: 5px 5px 0 0;
                        background-color: #254B6E;
                        display: flex;
                        align-items: center;
                        padding: 0.50em 0.40em;

                        & img {
                            width: 20px;
                            height: 20px;
                            margin-left: 0.5em;
                        }

                        & p{
                            color: #fff;
                            margin-left: 0.5em;
                            font-size: 1.0625em;
                        }
                    }

                    & div.image-recipe {
                        width: 100%;
                        height: 100%;
                        grid-column: 1;

                        & img {
                            width: 100%;
                            height: 100%;
                            border-radius: 8px 0 0 8px;
                        }
                    }

                    & div.data-recipe {
                        grid-column: 2;
                    }

                    & div.info-recipe {
                        grid-column: 3;
                        display: block;
                        padding: 1em;
                        border-left: solid 1px rgba(0, 0, 0, .1);

                        & div {
                            width: 100%;
                            text-align: right;
                            margin-right: 35px;
                        }

                        & div.favorite-info {
                            padding: 0 1em 1em 0;
                            display: flex;
                            align-items: flex-start;
                            justify-content: flex-end;

                            & img {
                                width: 20px;
                                height: 20px;
                                margin-right: 5px;
                            }

                            & p {
                                font-size: 1em;
                            }

                            & p span{
                                font-weight: bold;
                            }
                        }

                        & div.date-info {

                            & p {
                                font-weight: normal;
                                font-size: 0.8rem;
                            }
                            
                            & p + p {
                                color: #254B6E;
                                font-weight: bold;
                                font-size: 0.95rem;
                                margin-top: 0.25em;
                            }
                        }

                        & div.avaliation-info {
                            padding: 1em 1em 0 1em;
                            justify-content: flex-end; 
                        }
                    }
                }
            }
        }
    }
`
export const Category = styled.div`
    width: 100%;
    max-height: ${props => props.height + 2}px;
    background: #254B6E;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: .28571429rem;

    @media(min-width: 700px) {
        grid-column: 1; 
    }

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

    & p {
        color: #fff;
        font-size: 1.25rem;
    }

    & ol.list-category{
        display: block;

        & li {
            list-style: none;
            background: #fff;
            padding: 1em;
            font-size: 1rem;
            height: 50px;
            display: flex;
            align-items: center;
            border-bottom: solid 1px rgba(0, 0, 0, .15);
        }

        & li:last-child {
            border-radius: 0 0 .28571429rem .28571429rem;;
        } 
    }
`