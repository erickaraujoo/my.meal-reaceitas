import React, { lazy } from 'react'

export default function PersonalInfo() {
  const Header = lazy(() => 
    import("./../../../components/PersonalInfo/Header")
  );
  const PersonalData = lazy(() => 
    import("./../../../components/PersonalInfo/PersonalData")
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