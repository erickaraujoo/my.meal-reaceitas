import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './../pages/Home'
import Recipes from './../pages/Recipes'
import Profile from './../pages/Profile'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <Home /> } />
            <Route exact path="/recipes" component={ () => <Recipes /> } />
            <Route exact path="/profile/:id" component={ () =>  <Profile /> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;