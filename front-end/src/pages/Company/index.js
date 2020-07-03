import React, { lazy, useState } from 'react'

export default function Company() { 

  const Header = lazy(() => import("./../../components/Header"));

  return (
    <>
      <Header />
    </>
  );
}