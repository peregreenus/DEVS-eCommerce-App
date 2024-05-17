import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import * as classes from './not-found.module.css';
import { MainProps } from '../../../data/types/main-props';

function Notfound({ state, setState }: MainProps) {
  return (
    <div>
      <Header state={state} setState={setState} />
      <section className={classes.notFound}>
        <div className={classes.title}>404</div>
        <div className={classes.subtitle}>Something went wrong!</div>
        <Link to="/" className={classes.button}>
          To homepage
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Notfound;
