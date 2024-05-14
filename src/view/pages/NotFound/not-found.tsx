import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';

function Notfound({ showMsg, setShowMsg }: MainProps) {
  return (
    <div>
      <Header showMsg={showMsg} setShowMsg={setShowMsg} />
      <section className="page-nofound">
        <div className="title">404</div>
        <div className="subtitle">Something went wrong!</div>
        <Link to="/main" className="button">
          To homepage
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Notfound;
