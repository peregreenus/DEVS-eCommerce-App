import React from 'react';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';

function Cart({ state, setState }: MainProps) {
  return (
    <section>
      <Header state={state} setState={setState} />
      Cart
    </section>
  );
}

export default Cart;
