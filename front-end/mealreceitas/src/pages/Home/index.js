import React from 'react';

import Header from './../../components/Header'

import { Container, Modal, Search } from './styles'

function Home() {

    return (
        <>
            <Header />
            <Container>
                <Modal>
                    <h2>PESQUISE SUA RECEITA FAVORITA</h2>
                    <p>OU PESQUISE POR INGREDIENTE</p>

                    <Search>
                        <input type="text" placeholder="Pesquise por receitas..." />
                        <img src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/search-512.png"/>
                    </Search>
                </Modal>
            </Container>
        </>
    );
}
export default Home;