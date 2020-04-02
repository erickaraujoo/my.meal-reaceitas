import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: auto;
    margin: 5em 0 0 0;
    padding: 0 1.5em;

    & h1{
        color: #254B6E;
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
export const ContainerCards = styled.div`
    width: 100%;
    margin-top: 3rem;

    & div.card-recipes{
        width: 100%;
        height: auto;

        & ol {

            & li {
                list-style: none;
                border: solid 2px #254B6E;
                margin-top: 1.5em;
                border-radius: 10px;
                box-shadow: 0 0 5px rgba(0, 0, 0, .5);
                transition: box-shadow 0.2s;
                cursor: pointer;
            }

            & li:hover{
                box-shadow: 0 0 12.5px rgba(0, 0, 0, .5);
            }

            & li div + div {
                padding: 1em;
            }

            & li div img.imgRecipe{
                width: 100%;
                height: 150px;
                border-radius: 8px 8px 0 0;
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
                    font-size: 0.8rem;
                }

                & div.access-info {
                }

                & div.date-info {
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
        }
    }
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

    & p {
        color: #fff;
        font-size: 1.25rem;
    }
`

export const ListCategory = styled.ol`
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
`