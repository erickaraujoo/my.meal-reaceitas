import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoadingPage from './../components/LoadingPage';

const Home = lazy(() => import('./../pages/Home'));
const Recipes = lazy(() => import('./../pages/Recipes'));
const Profile = lazy(() => import('./../pages/Profile'));
const NewRecipe = lazy(() => import('./../pages/NewRecipe'));
const Login = lazy(() => import('./../pages/Login'));
const Register = lazy(() => import('./../pages/Register'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
            <Switch>
                <Route exact path="/" component={ () => <Home /> } />
                <Route exact path="/recipes" component={ () => <Recipes /> } />
                <Route exact path="/profile/:id" component={ () =>  <Profile /> } />
                <Route exact path="/profile/:id/recipe/create" component={ () =>  <NewRecipe /> } />

                <Route exact path="/login" component={ () => <Login /> } />
                <Route exact path="/register" component={ () => <Register /> } />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Routes;