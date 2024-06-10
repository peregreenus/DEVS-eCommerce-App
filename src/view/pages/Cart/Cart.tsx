/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './cart.module.css';
import getCart from '../../../data/api/Cart/GetCart';
import { ICart, LineItem } from '../../../data/types/interfaces/ICart';

function Cart({ state, setState }: MainProps) {
  const [cart, setCart] = useState<ICart>();

  useEffect(() => {
    async function fetchCart() {
      const fetchedCart: ICart = await getCart();
      if (fetchedCart) {
        setCart(fetchedCart);
      }
    }
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <>
      <Header state={state} setState={setState} />
      <section className={classes.cart}>
        <h2>Cart</h2>
        <div>Product list:</div>
        <ul>
          {cart && cart.lineItems ? (
            cart.lineItems.map((item: LineItem) => <li key={item.id}>{item.name.en}</li>)
          ) : (
            <p>No items in the cart</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Cart;
