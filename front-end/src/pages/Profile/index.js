import React, { lazy } from "react";

import { Main } from "./styles";

export default function Profile() {
  const Header = lazy(() => import("./../../components/Profile/Header"));
  const ProfileInfo = lazy(() =>
    import("./../../components/Profile/ProfileInfo")
  );
  const Footer = lazy(() => import("./../../components/Footer"));
  const Recipes = lazy(() => import("./../../components/Profile/Recipes"));

  return (
    <Main>
      <Header />
      <ProfileInfo />
      <Recipes />
      <Footer />
    </Main>
  );
}
