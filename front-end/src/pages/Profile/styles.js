import styled from 'styled-components';

import BackgroundImageProfile from './../../assets/profile/fundo.png';

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
            height: 450px;
            background: #FFFFFF;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
            border-radius: 0px 0px 5px 5px;

            & div.background {
                height: 230px;
                background-image: url(${BackgroundImageProfile});
                background-size: contain;
            }

            & div.main_info {
                position: relative;
                top: -75px;
                text-align: center;

                & div.image_profile {
                    width: 150px;
                    height: 150px;
                    margin: 0 auto;
                    padding: 3px;
                    background-color: white;
                    border-radius: 50%;
                    
                    & img { width: 100%; height: 100%; border-radius: 50% };
                }

                & h2 {
                    margin-top: 30px;
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

        & section.section_info {
            grid-column: 4/22;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;

            & div.section_personal_information, div.section_perfil {    
                background: #FFFFFF;
                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
                border-radius: 5px;
                min-height: 350px;
                height: auto;
                width: 50%;
                padding: 35px 40px 30px 30px;

                & div.title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: auto;

                    & h3 {
                        font-size: 1.375rem;
                        font-family: PoppinsRegular;
                        line-height: 40px;
                        letter-spacing: .35px;
                    };

                    & img { width: 18.75px; height: 18.75px };
                }

                & ol {
                    & li { 
                        list-style: none; 
                        display: flex; 
                        align-items: center;
                        min-height: 25px;
                        height: auto;
                        width: 100%;

                        & img { margin-right: 15px };
                        & p { font-family: PoppinsRegular };
                    };

                    & li:first-child { margin-top: 40px };
                    & li + li { margin-top: 30px };

                    & li.li_description {
                        margin-top: 40px;
                        display: block;

                        & div.title { 
                            display: flex; 
                            align-items: center;
                            justify-content: flex-start;
                            min-height: 25px;
                            height: auto;
                            width: 100%; 

                            & img { width: auto; height: auto };
                        };

                        & div.description {
                            margin-top: 20px;
                            padding: 0 10px;

                            & textarea { 
                                width: 100%;
                                min-height: 90px;
                                height: auto;
                                resize: none;
                                border: none;
                                text-align: justify;
                                font-size: 0.875rem;
                                line-height: 30px;
                                font-family: Poppins;
                            };
                        }
                    };
                }
            }

            & div.section_personal_information { margin-right: 10px };
            & div.section_perfil { margin-left: 10px };
        }

        & section.section_recipes {
            grid-column: 4/22;
            margin-top: 20px;
            background: #FFFFFF;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            height: auto;
            padding: 35px 45px;

            & div.title {
                display: flex;
                justify-content: space-between;

                & h3 { font-size: 1.375rem; font-family: PoppinsLight };

                & img { width: 30px; height: 30px };
            };

            & ul {
                & li {
                    list-style: none;
                    min-height: 70px;
                    height: auto;
                    background: #FFFFFF;
                    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    padding: 0 30px;

                    & div.image { width: 5%; height: 40px;
                        & img { width: 40px; height: 100%; border-radius: 50% };
                    };

                    & p { 
                        font-family: PoppinsLight; 
                        line-height: 40px; 
                        letter-spacing: .35px;
                        min-height: 20px; 
                        height: auto;
                    };

                    & p + p { text-align: center };

                    & p.name {
                        font-family: Poppins;
                        margin-left: 30px;
                        width: 25%;
                        min-height: 20px;
                        height: auto;
                    }

                    & p.date { width: 22%;  };
                    & p.hits { width: 17% };
                    & p.favorites { width: 17% };

                    & div.options {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        width: 14%;

                        & img.edit { width: 25px; height: 25px; margin-right: 10px };
                        & img.delete { width: 27.5px; height: 27.5px };
                    }
                }

                & li:first-child { margin-top: 50px };
                & li + li { margin-top: 20px };
            }
        };
    }
`;