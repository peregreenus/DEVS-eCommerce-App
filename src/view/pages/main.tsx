import React from 'react';
import Header from '../components/common/header/header';

function Main() {
  return (
    <>
      <Header />
      <section className="greeting main-section">greeting</section>
      <section className="offer main-section">offer</section>
      <section className="call-to-action main-section">call-to-action</section>
    </>
  );
}

export default Main;
