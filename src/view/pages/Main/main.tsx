import React from 'react';
import Header from '../../components/common/header/header';
import CallToAction from './call-to-action';
import Greeting from './greeting';
import Offer from './offer';
import './main.css';
import Footer from '../../components/common/footer/footer';

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Greeting />
        <Offer />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Main;
