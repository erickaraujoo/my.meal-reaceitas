import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

import ImageMenu from './../../assets/burger_menu.png';

export default function Header({ customHeader }) {

    const history = useHistory();

    const handlePageLogin = () => history.push(`/login`);

    return(
        <Container customHeader={customHeader}>
            <section className="header_mobile">
                <h1>MEAL RECEITAS</h1>
                <img src={ImageMenu} alt="" />
            </section>

            <section className="header_web">
                <h1>MEAL RECEITAS</h1>

                <nav>
                    <ul>
                        <li>CHEFS</li>
                        <li>RECEITAS</li>
                        <li>CATEGORIAS</li>
                        <li>PUBLICAR</li>
                        <li>FEEDBACK</li>
                    </ul>
                </nav>

                <div className="register_header">
                    <div className="login" onClick={() => handlePageLogin()}>
                        <p>LOG IN</p>
                    </div>
                    <hr/>
                    <div className="register">
                        <p>REGISTER</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}