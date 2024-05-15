import React from 'react';
import Header from '../../components/common/header/header';
import CallToAction from './call-to-action';
import Greeting from './greeting';
import Offer from './offer';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './main.module.css';

function Main({ showMsg, setShowMsg }: MainProps) {
  return (
    <>
      <Header showMsg={showMsg} setShowMsg={setShowMsg} />
      <main className={classes.main}>
        <Greeting />
        <Offer />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Main;
