import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './not-found.module.css';

function Notfound({ showMsg, setShowMsg }: MainProps) {
  return (
    <div>
      <Header showMsg={showMsg} setShowMsg={setShowMsg} />
      <section className={classes.notFound}>
        <div className={classes.title}>404</div>
        <div className={classes.subtitle}>Something went wrong!</div>
        <Link to="/main" className={classes.button}>
          To homepage
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Notfound;
