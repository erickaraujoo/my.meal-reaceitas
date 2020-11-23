import React, { lazy } from 'react'

export default function ProfileInfo() {
  const Header = lazy(() => 
    import("./../../../components/ProfileInfo/Header")
  );
  const PersonalData = lazy(() => 
    import("../../../components/ProfileInfo/ProfileData")
  );
  const Footer = lazy(() => 
    import("./../../../components/Footer")
  );

  return (
    <>
      <Header />
      <PersonalData />
      <Footer />
    </>
  );
}