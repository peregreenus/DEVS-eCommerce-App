/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
import AddToCart from '../../../data/api/Cart/AddToCart';
import getProduct from '../../../data/api/getProduct';
import RemoveFromCart from '../../../data/api/Cart/RemoveFromCart';
import DeleteIcon from '../../components/common/icons/delete';
import Modal from '../../components/common/modal/modal';
import Button from '../../components/common/Button/Button';
import InputLabelButton from '../../components/common/input/input';

function Cart({ state, setState }: MainProps) {
  const [cart, setCart] = useState<ICart | null>(null);
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

  async function incProduct(lineItem: LineItem): Promise<void> {
    const product = await getProduct(lineItem.productId, { state, setState });
    if (product) {
      await AddToCart(product, 1);
      const updatedCart = await getCart();
      setCart(updatedCart);
    }
  }

  async function decProduct(lineItem: LineItem): Promise<void> {
    if (lineItem.quantity <= 1) return;
    const product = await getProduct(lineItem.productId, { state, setState });
    if (product) {
      await RemoveFromCart(product, 1);
      const updatedCart = await getCart();
      setCart(updatedCart);
    }
  }

  async function removeProduct(lineItem: LineItem): Promise<void> {
    const product = await getProduct(lineItem.productId, { state, setState });
    if (product) {
      await RemoveFromCart(product, lineItem.quantity);
      const updatedCart = await getCart();
      setCart(updatedCart);
    }
  }

  async function clearCart(): Promise<void> {
    if (cart) {
      const lineItems = [...cart.lineItems];
      for (const item of lineItems) {
        try {
          await removeProduct(item);
          // Оновлення кошика після успішного видалення елемента
          setCart(await getCart());
        } catch (error) {
          console.error('Error removing item from cart:', error);
          throw new Error('Failed to remove item from cart');
        }
      }
    }
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleClearCartClick = () => {
    setModalVisible(true);
  };

  const handleConfirmClearCart = async () => {
    await clearCart();
    setModalVisible(false);
  };

  function totalInCart(lineItems: LineItem[]): number {
    return lineItems.reduce((sum, item) => {
      const discountedAmount = item.totalPrice.centAmount;
      return sum + discountedAmount;
    }, 0);
  }

  function handleInputPromo(value: string): void {
    console.log('promo', value);
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
                    <div className={`${classes.cell} ${classes.cell}`}>
                      <a href={`/catalog/product/${item.productId}`}>
                        <img
                          className={classes.img}
                          src={item.variant.images[0].url}
                          alt={item.name.en}
                        />
                      </a>
                    </div>
                    <div className={`${classes.cell}`}>{item.name.en}</div>

                    <div className={`${classes.priceWrapper} ${classes.cell}`}>
                      {item.variant.prices[0].discounted
                        ? formatPrice(item.variant.prices[0].discounted.value.centAmount)
                        : formatPrice(item.variant.prices[0].value.centAmount)}
                    </div>
                    <div className={`${classes.priceWrapper} ${classes.cell}`}>
                      Total:&#32;
                      {formatPrice(item.totalPrice.centAmount)}
                    </div>
                    <div className={`${classes.cellWrapper}`}>
                      <div className={`${classes.counterWrapper} ${classes.cell}`}>
                        <button
                          className={classes.btnQuantity}
                          type="button"
                          onClick={() => decProduct(item)}>
                          <MinusIcon width="1.5rem" height="1.5rem" />
                        </button>
                        <span className={classes.labelQuantity}>{item.quantity}</span>
                        <button
                          className={classes.btnQuantity}
                          type="button"
                          onClick={() => incProduct(item)}>
                          <PlusIcon width="1.5rem" height="1.5rem" />
                        </button>
                      </div>
                      <button
                        className={classes.removeBtn}
                        type="button"
                        onClick={() => removeProduct(item)}>
                        <DeleteIcon width="2rem" height="2rem" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <InputLabelButton
                label="Promo:"
                onClick={(value: string) => handleInputPromo(value)}
              />
              <div className={classes.bottomBtnsSect}>
                <div className={classes.total}>
                  The total cost of the items in the basket{' '}
                  {formatPrice(totalInCart(cart.lineItems))}
                </div>
                <div className={classes.buttonWrapper}>
                  <button
                    type="button"
                    className={`${classes.btn} ${classes.clearBtn}`}
                    onClick={handleClearCartClick}>
                    Clear cart
                  </button>
                  <button type="button" className={`${classes.btn}`} onClick={navigateCatalog}>
                    Continue shopping
                  </button>
                </div>
              </div>
              <Modal visible={modalVisible} setVisible={setModalVisible}>
                <div className={classes.confirm}>
                  <p style={{ margin: '2rem 0' }}>Are you sure you want to clear the cart?</p>
                  <Button className="btn btnYes" onClick={handleConfirmClearCart}>
                    Yes
                  </Button>
                  <Button className="btn btnNo" onClick={() => setModalVisible(false)}>
                    No
                  </Button>
                </div>
              </Modal>
            </>
          ) : (
            <div className={classes.noProduct}>
              <img className={classes.imgEmpty} src={cartIcon} alt="" />
              <h3>No products in the cart</h3>
              <p>But it&#39;s never too late to fix it :&#41;</p>
              <button className={classes.btn} type="button" onClick={navigateCatalog}>
                Welcome do it!
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
