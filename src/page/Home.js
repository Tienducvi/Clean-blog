import React from 'react';
import { useSelector } from 'react-redux';
import HomeHeader from '../containers/Header';
import HomeBody from '../redux/api/api';
import FooterHome from '../containers/Footer';
import Homepic from '../assets/img/homepic.jpg';

function Home() {
  const headerData = useSelector((state) => state.header.headerData[0]);
  const {
    bigTitle, smallTitle,
  } = headerData;
  return (
    <>
      <HomeHeader bigTitle={bigTitle} smallTitle={smallTitle} picture={Homepic} />
      <HomeBody />
      <FooterHome />
    </>
  );
}

export default Home;
