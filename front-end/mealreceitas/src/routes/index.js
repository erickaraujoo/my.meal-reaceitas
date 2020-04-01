import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './../pages/Home'
import Recipes from './../pages/Recipes'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <Home /> } />
            <Route path="/" component={ () => <Recipes /> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;