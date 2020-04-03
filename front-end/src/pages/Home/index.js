import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from './../../components/Header'

import { Container, Modal } from './styles'
import { InputSearch } from './../../styles';

import ImageSearch from './../../assets/search.png';

function Home() {

    const history = useHistory();

    function handleSearchRecipes() {
        history.push('/receitas');
    }

    return (
        <>
            <Header />
            <Container>
                <Modal>
                    <h1>PESQUISE SUA RECEITA FAVORITA</h1>
                    <p>OU PESQUISE POR INGREDIENTE</p>

                    <InputSearch width={95} margin={{ top: '3.5em' }}>
                        <input placeholder="Pesquisar..." />
                        <button onClick={handleSearchRecipes}>
                            <img src={ImageSearch} alt="Pesquisar"/>
                        </button>
                    </InputSearch>
                </Modal>
            </Container>
        </>
    );
}
export default Home;