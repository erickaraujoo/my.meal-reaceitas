import React from 'react'

import { ToastContainer } from 'react-toastify'

import Routes from './routes'
import Header from './components/Header'

import GlobalStyle from './styles'

const App = () => (
    <>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
    </>
)

export default App;