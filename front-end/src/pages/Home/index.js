import React from 'react';

import Header from './../../components/Header'

import { Container, Modal } from './styles'
import { InputSearch } from './../../styles';

import ImageSearch from './../../assets/search.png';

function Home() {

    return (
        <>
            <Header />
            <Container>
                <Modal>
                    <h2>PESQUISE SUA RECEITA FAVORITA</h2>
                    <p>OU PESQUISE POR INGREDIENTE</p>

                    <InputSearch width={95} margin={{ top: '3.5em' }}>
                        <input placeholder="Pesquisar..." />
                        <button>
                            <img src={ImageSearch} alt="Pesquisar"/>
                        </button>
                    </InputSearch>
                </Modal>
            </Container>
        </>
    );
}
export default Home;