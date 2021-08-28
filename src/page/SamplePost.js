import React from 'react';
import { useSelector } from 'react-redux';
import HomeHeader from '../containers/Header';
import FooterHome from '../containers/Footer';

function SamplePost() {
  const headerData = useSelector((state) => state.header.headerData[2]);
  const {
    bigTitle, smallTitle,
  } = headerData;
  return (
    <>
      <HomeHeader bigTitle={bigTitle} smallTitle={smallTitle} />
      <FooterHome />
    </>
  );
}

export default SamplePost;
