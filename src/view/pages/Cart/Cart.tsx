import React from 'react';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './cart.module.css';

function Cart({ state, setState }: MainProps) {
  return (
    <>
      <Header state={state} setState={setState} />
      <section className={classes.cart}>
        <h2>Cart</h2>
        <div>product list</div>
      </section>
    </>
  );
}

export default Cart;
