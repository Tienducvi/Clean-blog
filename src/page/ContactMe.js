import React from 'react';
import { useSelector } from 'react-redux';
import HomeHeader from '../containers/Header';
import FooterHome from '../containers/Footer';
import ContactBody from '../containers/ContactBody';

function ContactMe() {
  const headerData = useSelector((state) => state.header.headerData[3]);
  const {
    bigTitle, smallTitle,
  } = headerData;
  return (
    <>
      <HomeHeader bigTitle={bigTitle} smallTitle={smallTitle} />
      <ContactBody />
      <FooterHome />
    </>
  );
}

export default ContactMe;
