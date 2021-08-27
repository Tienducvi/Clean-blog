import React from 'react';
import HomeHeader from '../containers/Header';
import HomeBody from '../redux/api/api';
import FooterHome from '../containers/Footer';

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeBody />
      <FooterHome />
    </>
  );
}

export default Home;
