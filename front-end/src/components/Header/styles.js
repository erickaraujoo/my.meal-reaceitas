import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 999;
    
    & section.header_mobile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        max-height: 60px;
        background: #000;

        & h1 { color: white; font-size: 1.5rem };
        & img { width: auto; height: 1.5em; cursor: pointer };
    }

    & section.header_web { display: none };

    @media(min-width: 1100px) {
        display: grid;
        grid-template-columns: repeat(24, 1fr);

        & section.header_web {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            grid-column: 1/25;
            padding-left: 50px;
            /* margin-top: 20px; */
            background-color: ${props => props.customHeader ? '#1A1A1A' : 'transparent'};
            box-shadow: ${props => props.customHeader ? '0 0 3px black' : 'none'};
            transform: ${props => props.customHeader ? 'translateY(0px)' : 'translateY(-10px)'};
            transition: .4s;

            & h1 { color: white; font-size: 1.25rem };

            & nav ul { display: flex;

                & li { list-style: none; color: white; cursor: pointer; font-size: 1rem;
                    &:hover {  color: #468DCE };
                }

                & li + li { margin-left: 40px };
            }

            & div.register_header {
                height: 100%;
                width: 230px;
                display: flex;
                align-items: center;

                & div.login, div.register {
                    height: 100%;
                    width: 50%;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: ${ props => {
                        return props.customHeader ? 'linear-gradient(180deg, #254B6E 0%, #183D60 100%);' : 'transparent'}
                    };

                    & p { font-size: 1.125rem; transition: font-size .15s };

                    &:hover > p { font-size: 1.25rem };
                }

                & hr {
                    border: ${ props => {
                         return props.customHeader ? 
                            'solid .05px #254B6E;' : 
                            'solid .05px rgba(255, 255, 255, .4);'}
                    };
                    height: ${ props => {
                         return props.customHeader ? '100%' : '50%'}
                    };
                    transition: .2s;
                }
            }
        }

        & section.header_mobile { display: none }; 
    }
`