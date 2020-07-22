import React, { lazy, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUserById } from "../../store/modules/user/actions";

import { Main } from "./styles";

export default function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Header = lazy(() => import("./../../components/Profile/Header"));
  const ProfileInfo = lazy(() =>
    import("./../../components/Profile/ProfileInfo")
  );
  const Footer = lazy(() => import("./../../components/Footer"));
  const Recipes = lazy(() => import("./../../components/Profile/Recipes"));

  useEffect(() => {
    dispatch(
      getUserById({
        userId: id
      })
    )
  }, [dispatch, id]);

  return (
    <Main>
      <Header />
      <ProfileInfo />
      <Recipes />
      <Footer />
    </Main>
  );
}
