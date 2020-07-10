import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoadingPage from "./../components/LoadingPage";
import Recipes from './../pages/Recipes';

const Home = lazy(() => import("./../pages/Home"));
const Profile = lazy(() => import("./../pages/Profile"));
const PersonalInfo = lazy(() => import("./../pages/Profile/PersonalInfo"));
const ProfileInfo = lazy(() => import("./../pages/Profile/ProfileInfo"));
const NewRecipe = lazy(() => import("../pages/CreateRecipe"));
const Login = lazy(() => import("./../pages/Login"));
const Register = lazy(() => import("./../pages/Register"));
const InfoRecipe = lazy(() => import("./../pages/InfoRecipe"));
const Company = lazy(() => import("./../pages/Company"));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route exact path="/receitas" component={() => <Recipes />} />
        <Route exact path="/receitas/:id" component={() => <InfoRecipe />} />
        <Route exact path="/perfil/:id/receita/criar" component={() => <NewRecipe />} />

        <Route exact path="/perfil/:id" component={() => <Profile />} />
        <Route exact path="/perfil/:id/informacoes-pessoais" component={() => <PersonalInfo />} />
        <Route exact path="/perfil/:id/informacoes-perfil" component={() => <ProfileInfo />} />
        
        <Route path="/entrar" component={() => <Login />} />
        <Route path="/cadastrar" component={() => <Register />} />

        <Route path="/empresa" component={() => <Company />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
