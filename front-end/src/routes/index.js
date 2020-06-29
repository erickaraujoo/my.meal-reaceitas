import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoadingPage from "./../components/LoadingPage";
import Recipes from './../pages/Recipes';

const Home = lazy(() => import("./../pages/Home"));
const Profile = lazy(() => import("./../pages/Profile"));
const NewRecipe = lazy(() => import("./../pages/NewRecipe"));
const Login = lazy(() => import("./../pages/Login"));
const Register = lazy(() => import("./../pages/Register"));
const InfoRecipe = lazy(() => import("./../pages/InfoRecipe"));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route exact path="/receitas" component={() => <Recipes />} />
        <Route exact path="/receitas/:id" component={() => <InfoRecipe />} />
        <Route exact path="/perfil/:id/receita/criar" component={() => <NewRecipe />} />

        <Route exact path="/perfil/:id" component={() => <Profile />} />
        <Route path="/entrar" component={() => <Login />} />
        <Route path="/cadastrar" component={() => <Register />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
