import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './../pages/Home'
import Recipes from './../pages/Recipes'
import Profile from './../pages/Profile'
import NewRecipe from './../pages/NewRecipe'

import Login from './../pages/Login'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <Home /> } />
            <Route exact path="/recipes" component={ () => <Recipes /> } />
            <Route exact path="/profile/:id" component={ () =>  <Profile /> } />
            <Route exact path="/profile/:id/recipe/create" component={ () =>  <NewRecipe /> } />

            <Route exact path="/login" component={ () => <Login /> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;