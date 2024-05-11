import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header/header';
import './not-found.css';

function Notfound() {
  return (
    <div>
      <Header />
      <section className="page-nofound">
        <div className="title">404</div>
        <div className="subtitle">Something went wrong!</div>
        <Link to="/main" className="button">
          To homepage
        </Link>
      </section>
    </div>
  );
}

export default Notfound;
