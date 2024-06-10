/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './cart.module.css';
import getCart from '../../../data/api/Cart/GetCart';
import { ICart, LineItem } from '../../../data/types/interfaces/ICart';
import cartIcon from '../../../assets/icon/modal-cart-dummy.svg';
import formatPrice from '../../../data/utils/formatPrice';
import PlusIcon from '../../components/common/icons/plus';
import MinusIcon from '../../components/common/icons/minus';

function Cart({ state, setState }: MainProps) {
  const [cart, setCart] = useState<ICart>();
  const navigate = useNavigate();

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

  function navigateCatalog(): void {
    navigate('/catalog');
  }

  return (
    <>
      <Header state={state} setState={setState} />
      <section className={classes.cart}>
        <h2>Cart</h2>
        <div className={classes.cartWrapper}>
          {cart && cart.lineItems && cart.lineItems.length > 0 ? (
            <>
              <ul>
                {cart.lineItems.map((item: LineItem) => (
                  <li key={item.id}>
                    <div>
                      <a href={`/catalog/product/${item.productId}`}>
                        <img
                          className={classes.img}
                          src={item.variant.images[0].url}
                          alt={item.name.en}
                        />
                      </a>
                    </div>
                    <div className={classes.nameWrapper}>{item.name.en}</div>
                    <div className={classes.counterWrapper}>
                      <button className={classes.btnQuantity} type="button">
                        <MinusIcon />
                      </button>
                      <span className={classes.labelQuantity}>{item.quantity}</span>
                      <button className={classes.btnQuantity} type="button">
                        <PlusIcon />
                      </button>
                    </div>
                    <div className={classes.priceWrapper}>
                      {formatPrice(item.variant.prices[0].value.centAmount)}
                    </div>
                    <div className={classes.priceWrapper}>
                      Total:&#32;
                      {formatPrice(item.variant.prices[0].value.centAmount * item.quantity)}
                    </div>
                    <button className={classes.removeBtn} type="button">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className={classes.bottonBtnsSect}>
                <button type="button" className={classes.clearBtn}>
                  Clear
                </button>
                <button type="button" className={classes.clearBtn}>
                  Continue shopping
                </button>
              </div>
            </>
          ) : (
            <div className={classes.noProduct}>
              <img className={classes.imgEmpty} src={cartIcon} alt="" />
              <h3>No products in the cart</h3>
              <p>But it&#39;s never too late to fix it :&#41;</p>
              <button className={classes.welcomeBtn} type="button" onClick={navigateCatalog}>
                Welcome!
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
