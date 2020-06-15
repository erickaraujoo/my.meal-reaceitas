import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: auto;
    padding: 0 1.5em;
    margin-bottom: 100px;

    & h1 { color: #254B6E };

    & p.pTotal-recipes { margin-top: 3em; font-size: 1.15rem; text-align: right };

    @media(min-width: 1000px) {
        padding: 0;
        display: grid;
        grid-template-columns: 1fr repeat(1, minmax(auto, 300px)) repeat(1,minmax(auto, 420px)) repeat(1,minmax(auto, 340px)) 1fr;
        column-gap: 2em;

        & div.blue_background { 
            grid-column: 1/6;
            width: 100%;
            height: 100px;
            background-color: #254B6E;
        };

        & h1{ grid-column: 2/5; margin-top: 100px };

        & p.pTotal-recipes{ grid-column: 2/5 };

        & section.section-data-classification {
            grid-column: 2/5;

            & div.content-wrap {
                display: grid;
                grid-template-columns: repeat(1, minmax(auto, 300px)) repeat(1,minmax(auto, 420px)) repeat(1,minmax(auto, 340px));
                column-gap: 2em;
            }

            & div.filter-ingredients { grid-column: 1; width: 100%; margin-top: 1.5em };
            & div.order-by{ grid-column: 2; width: 100% };
            & div.input-search{ grid-column: 3; width: 100% };
        }

        & section.section-category-cards {
            grid-column: 2/5;

            & div.content-wrap {
                display: grid;
                grid-template-columns: repeat(1, minmax(auto, 300px)) repeat(1,minmax(auto, 760px));
                column-gap: 2em;
            }
        }

        & div.card-container{ grid-column: 2/5 };
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
    height: 45px;
    transition: filter 0.1s;

    &:hover { filter: brightness(95%); cursor: pointer };

    & img { width: 35px; height: auto; margin: 0 1rem 0 1.25rem };
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
    height: 45px;

    & p { margin-right: 1em };

    & select {
        width: calc(100% - 125px);
        height: auto;
        border: 1px solid rgba(34,36,38,.15);
        border-radius: .4571429rem;
        color: rgba( 0, 0, 0, .87);
        padding: .37857143em 1em;
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
                /* border: solid 2px #254B6E; */
                border-radius: 10px;
                box-shadow: 0 0 5px rgba(0, 0, 0, .5);
                transition: box-shadow 0.2s;
                cursor: pointer;
            }

            /* & li + li { border: solid 2px rgba(0, 0, 0, .3) }; */

            & li:hover { box-shadow: 0 0 12.5px rgba(0, 0, 0, .5) };

            /* & li div + div + div { padding: 1em }; */

            & div.data-recipe, & div.access-info { padding: 1em };

            & div.data-recipe { border-bottom: solid 1px rgba(0, 0, 0, .15) };

            & li div img.imgRecipe{ width: 100%; height: 150px; border-radius: 8px 8px 0 0 };

            & div.best-recipe{ display: none };

            & li div.data-recipe {
                & strong { font-size: 1.375rem; letter-spacing: 0.75px; font-family: PoppinsRegular };

                & p.description { font-size: .875rem; margin-top: 2em; text-align: justify; font-family: PoppinsRegular };
                & p.author { font-size: 0.875rem; font-style: italic; margin-top: 0.25em };
            }

            & li div.info-recipe {
                display: flex;
                justify-content: space-between;
                padding: 0.65em 1em 0 1em;

                & div:first-child { display: none };

                & div + div { font-size: 0.75rem; letter-spacing: .5px };

                & div.date-info {
                    & p { font-size: 1em; font-weight: 0 };
                    & p + p { font-weight: bold };
                }

                & div.avaliation-info {
                    display: flex;
                    align-items: center;

                    & p { font-size: 0.875rem }; 

                    & p.note-avaliation{
                        font-size: 0.875rem;
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

                & li:first-child { margin-top: 0;
                    & div.image-recipe img { border-radius: 0 0 0 8px };
                };

                & li + li { margin-top: 1.5em };

                & li {
                    display: grid;
                    grid-template-columns: repeat(1, minmax(auto, 30%)) repeat(1, minmax(auto, 47.5%)) repeat(1, minmax(auto, 22.5%));

                    & div.best-recipe{
                        grid-column: 1/5;
                        border-radius: 5px 5px 0 0;
                        background-color: #254B6E;
                        display: flex;
                        align-items: center;
                        padding: 0.50em 0.40em;

                        & img { width: 20px; height: 20px; margin-left: 0.5em };

                        & p{ color: #fff; margin-left: 0.5em; font-size: 1.0625em };
                    }
                    
                    & div.image-recipe { width: 100%; height: 100%; grid-column: 1 };
                    & div.data-recipe { grid-column: 2; border: none };

                    & div.info-recipe {
                        grid-column: 3;
                        display: block;
                        padding: 1em;
                        border-left: solid 1px rgba(0, 0, 0, .1);

                        & div { width: 100%; text-align: right; margin-right: 35px };

                        & div.favorite-info {
                            padding-bottom: 1em;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;

                            & img { width: 18px; height: 18px; margin-right: 7px };

                            & p { font-size: 1em; letter-spacing: .5px };
                            & p span { font-weight: bold };
                        }

                        & div.access-info { padding: 1em 0 };

                        & div.date-info { padding: 1em 0;
                            & p { font-weight: normal; font-size: 0.75rem };
                            & p + p { color: #254B6E; font-weight: bold; font-size: 0.875rem; margin-top: 0.25em };
                        }

                        & div.avaliation-info { padding-top: 1em; justify-content: flex-end };
                    }
                }
            }
        }
    }
`

export const ImageRecipe = styled.img`
    width: 100%; 
    height: 150px;
    border-radius: 8px 8px 0 0;
    background-image: url(${props => props.background });
    background-size: cover;
    height: 150px;
    background-position: top;
    filter: brightness(80%);

    @media(min-width: 1000px) {
        background-position: center;
        height: 100%; 
        border-radius: 8.5px 0 0 8.5px;
    } 
`;

export const Category = styled.div`
    width: 100%;
    max-height: ${props => props.height + 2}px;
    background: #254B6E;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: .28571429rem;

    @media(min-width: 700px) { grid-column: 1 };

    & div#titleCategory{ display: flex; align-items: center; padding: .5rem 1em };

    & img { width: 25px; height: auto; margin-right: 1rem };

    & p { color: #fff; font-size: 1.25rem };

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
            transition: filter 0.1s;
        }

        & li:last-child { border-radius: 0 0 .28571429rem .28571429rem }; 

        & li:hover { filter: brightness(95%); cursor: pointer };
    }
`