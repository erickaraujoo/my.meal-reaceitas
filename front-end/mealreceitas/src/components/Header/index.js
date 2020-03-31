import React from 'react'

import { Container, Nav, ImageUser, ImageLogo } from './styles'

export default function Header() {
    return(
        <Container className="container-header">
            <Nav className="nav-header">
                <ol className='ol-header'>
                    <li className="li-chefs">CHEFS</li>
                    <li className="li-recipe">RECEITAS</li>
                    <li className="li-category">CATEGORIAS</li>
                    <li className="li-logo">
                        <ImageLogo src="https://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png" />
                    </li>
                    <li className="li-publish">PUBLICAR</li>
                    <li className="li-feedback">FEEDBACK</li>
                    <li className="li-login">
                        Login
                        <ImageUser src="https://image.flaticon.com/icons/png/512/23/23228.png" />
                    </li>
                </ol>
            </Nav>
        </Container>
    )
}