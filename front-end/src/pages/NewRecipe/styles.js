import styled from 'styled-components';
import BackgroundImageRecipe from './../../assets/profile/recipeBackground.png';

export const Main = styled.main`
    width: 100%;
    height: auto;
    padding: 0 1.5em;

    @media(min-width: 1000px) {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        column-gap: 1.25em;
        padding-top:  calc(90px + 5em);
        padding-bottom: 3.5em;

        & div.blue_background { 
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 295px;
            background-color: #254B6E;
            z-index: -10;
        };

        & section.section_header {
            grid-column: 4/22;
            height: auto;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
            border-radius: 0px 0px 5px 5px;

            & div.background {
                height: 230px;
                background-image: url(${BackgroundImageRecipe});
                background-size: contain;
            }

            & div.main_info {
                text-align: center;

                & h2 {
                    margin-top: 50px;
                    font-size: 1.625rem;
                    font-family: PoppinsLight;
                    color: #000;
                    line-height: 40px;
                    letter-spacing: .5px;
                };

                & div.premium_member {
                    min-height: 30px;
                    height: auto;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    position: relative;
                    margin: 25px 30px 20px auto;

                    & img { margin-right: 18px };

                    & p { font-family: Poppins; font-size: 1.125rem; color: #000 };
                }
            };
        };

        & section.section_generalData {
            grid-column: 4/22;
            min-height: 535px;
            height: auto;
            margin-top: 20px;
            padding: 50px 80px;
            background: #FFFFFF;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
            border-radius: 5px;

            & div.title {
                width: 100%;
                height: auto;

                & h3 {
                    font-size: 1.375rem;
                    font-family: PoppinsLight;
                    line-height: 40px;
                    letter-spacing: .35px;
                };
            }

            & div.general_data {
                margin-top: 35px;
                display: flex;
                width: 100%;
                height: auto;
                justify-content: space-between;

                & div.image_recipe {
                    width: 42.5%;

                    & div.title {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        & img { margin-right: 12px; width: 18.75px; height: 18.75px };

                        & p { 
                            font-family: Poppins; 
                            line-height: 40px; 
                            letter-spacing: .35px;
                            min-height: 20px; 
                            height: auto;
                        };
                    }

                    & div.load_image {
                        width: 300px;
                        height: 300px;
                        max-width: 300px;
                        max-height: 300px;
                        margin-top: 15px;
                        background: #FFFFFF;
                        border: 1px dashed rgba(0, 0, 0, 0.2);
                        text-align: center;

                        & img { margin-top: 75px };
                        & p { margin-top: 10px };
                    }
                }
                
                & div.data_recipe {
                    width: 57.5%;

                    & div.name_recipe {

                        & div.title {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            & img { margin-right: 12px; width: 18.75px; height: 18.75px };

                            & p { 
                                font-family: Poppins; 
                                line-height: 40px; 
                                letter-spacing: .35px;
                                min-height: 20px; 
                                height: auto;
                            };
                        }

                        & input { 
                            width: 100%;
                            height: 45px;
                            margin-top: 15px;
                            background: #FFFFFF;
                            border: 0.5px solid rgba(0, 0, 0, 0.2);
                            box-sizing: border-box;
                            border-radius: 5px;
                            font-family: PoppinsLight;
                            font-style: normal;
                            font-size: 1rem;
                            line-height: 40px;
                            color: #000;
                        }
                    }

                    & div.description_recipe {
                        margin-top: 40px;
                        
                        & div.title {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            & img { margin-right: 12px; width: 25px; height: 25px };

                            & p { 
                                font-family: Poppins; 
                                line-height: 40px; 
                                letter-spacing: .35px;
                                min-height: 20px; 
                                height: auto;
                            };
                        }

                        & textarea {
                            width: 100%;
                            min-height: 160px;
                            height: auto;
                            resize: vertical;
                            margin-top: 15px;
                            font-family: PoppinsLight;
                            font-style: normal;
                            font-size: 1rem;
                            line-height: 40px;
                            color: #000;
                            background: #FFFFFF;
                            border: 0.5px solid rgba(0, 0, 0, 0.2);
                            box-sizing: border-box;
                            border-radius: 5px;
                            padding: 5px 20px;
                        }
                    }
                }
            }
        };

        & section.section_methodPreparation {
            grid-column: 4/22;
            min-height: 100px;
            height: auto;
            margin-top: 20px;
            padding: 50px 80px;
            background: #FFFFFF;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
            border-radius: 5px;

            & div.title {
                width: 100%;
                height: auto;

                & h3 {
                    font-size: 1.375rem;
                    font-family: PoppinsLight;
                    line-height: 40px;
                    letter-spacing: .35px;
                };
            }

            & ul {
                & li {
                    padding: 15px 20px;
                    background: #FFFFFF;
                    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
                    list-style: none;
                    display: flex;
                    justify-content: space-between;

                    & div.text_method { width: 90%; height: auto;

                        & strong { font-size: 1.375rem; font-family: PoppinsSemiBold };
                        & p { line-height: 40px; font-size: 1rem; text-align: justify };
                    };

                    & div.options {
                        width: 10%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;

                        & img { width: 30px; height: 30px };
                    }
                }

                & li:first-child { margin-top: 35px };
                & li + li { margin-top: 20px };
            }

            & div.add_topic {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 45px;
                width: 210px;

                & p { font-size: 1.125rem; font-family: Poppins };
                & img { margin-left: 15px; width: 30px; height: 30px };
            }
        }
    };
`