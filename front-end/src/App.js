import React from 'react'
import Routes from './routes'
import GlobalStyle from './styles'

import { Provider } from 'react-redux';
import store from './store/';

const App = () => (
    <Provider store={store}>
        <GlobalStyle />
        <Routes />
    </Provider>
)

export default App;