/* eslint-disable no-console */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  CustomerAddresses,
  CustomerProfileResponse
} from '../../../data/types/interfaces/customer.interface';
import * as styles from './profile.content.module.css';
import EditPencilIcon from '../common/icons/editPencilIcon';
import AddPlusIcon from '../common/icons/addPlusIcon';
import useModal from '../../../data/hooks/useModal';
import EditAddressModal from './editAddressModal';
import EditingAddresses from './editing-addresses';
import Country from '../../../data/types/country';

function AddressesTabContent({
  addresses,
  shippingAddressIds,
  defaultShippingAddressId,
  billingAddressIds,
  defaultBillingAddressId
}: CustomerProfileResponse) {
  const [defShipping, setDefShipping] = useState('');
  const [defBilling, setDefBilling] = useState('');
  const { isVisible, toggleVisible } = useModal();

  const shippingAddresses: CustomerAddresses[] = [];
  const billingAddresses: CustomerAddresses[] = [];
  const textb = '';
  if (shippingAddressIds && billingAddressIds && addresses) {
    shippingAddressIds.forEach((shipEl) => {
      addresses.forEach((addressEl) => {
        // console.log(addressEl.country);
        // console.log(addressEl.country);
        // // eslint-disable-next-line no-param-reassign
        // addressEl.country =
        //   Object.values(Country)[Object.keys(Country).indexOf(addressEl.country as Country)];
        // console.log(addressEl.country);
        if (addressEl.id === shipEl) {
          shippingAddresses.push(addressEl);
        }
        if (addressEl.id === defaultShippingAddressId) {
          setDefShipping(`${defaultShippingAddressId}`);
        }
      });
    });
    billingAddressIds.forEach((bilEl) => {
      addresses.forEach((addressEl) => {
        // console.log(addressEl.country);
        // console.log(addressEl.country);
        // // eslint-disable-next-line no-param-reassign
        // addressEl.country =
        //   Object.values(Country)[Object.keys(Country).indexOf(addressEl.country as Country)];
        // console.log(addressEl.country);
        if (addressEl.id === bilEl) {
          billingAddresses.push(addressEl);
        }
        if (addressEl.id === defaultBillingAddressId) {
          setDefShipping(`${defaultBillingAddressId}`);
        }
      });
    });
  }
  function modalShow(key: string) {
    toggleVisible(key);
  }

  function changeDefShippingValue(e: ChangeEvent) {
    setDefShipping(e.currentTarget.id);
  }

  function chengDefBillingValue(e: ChangeEvent) {
    setDefBilling(e.currentTarget.id);
  }

  function handleSubmitAddress(
    e: FormEvent<HTMLFormElement>,
    typeAddress: string,
    idAddress: string
  ) {
    e.preventDefault();
    const addressDetails = new FormData(e.currentTarget);
    console.log(Object.fromEntries(addressDetails.entries()));
    console.log(typeAddress);
    console.log(idAddress);
    modalShow(`${typeAddress}-${idAddress}`);
  }

  return (
    <div className={styles.addressesTabContent}>
      <div className={styles.addressContent}>
        <div className={styles.addressHead}>
          <h5>Shipping Addresses</h5>
          <button
            type="button"
            className={styles.controlProfileButton}
            onClick={() => modalShow('new')}>
            <AddPlusIcon width="1.5rem" height="1.5rem" />
            {textb}
          </button>
        </div>

        {shippingAddresses.map((value) => (
          <div key={value.id}>
            <div
              key={value.id}
              className={`${styles.address} ${defShipping === value.id ? styles.defaultAddress : ''} \
              ${!isVisible[`Shipping-${value.id}`] ? styles.showTextAddressContent : styles.hideTextAddressContent}`}>
              <div className={styles.addressControl}>
                <span>
                  <input
                    type="radio"
                    name="shippingRadio"
                    id={value.id}
                    checked={defShipping === value.id}
                    onChange={changeDefShippingValue}
                  />
                  set default
                </span>
                <button
                  type="button"
                  className={styles.controlProfileButton}
                  onClick={() => modalShow(`Shipping-${value.id}`)}>
                  <EditPencilIcon width="1.5rem" height="1.5rem" />
                  {textb}
                </button>
              </div>
              <div className={styles.addressBlock}>
                <p className={styles.profileContentString}>
                  <span>Country: </span>
                  {Object.values(Country)[Object.keys(Country).indexOf(value.country as Country)]}
                </p>
                <p className={styles.profileContentString}>
                  <span>Postal Code: </span>
                  {value.postalCode}
                </p>
              </div>
              <div className={styles.addressBlock}>
                <p className={styles.profileContentString}>
                  <span>City: </span>
                  {value.city}
                </p>
                <p className={styles.profileContentString}>
                  <span>Street: </span>
                  {value.streetName}
                </p>
              </div>
            </div>
            {isVisible[`Shipping-${value.id}`] && (
              <EditAddressModal toggleVisible={() => toggleVisible(`Shipping-${value.id}`)}>
                <EditingAddresses
                  id={`Shipping-${value.id}`}
                  addressData={value}
                  onSubmit={(e: FormEvent<HTMLFormElement>) =>
                    handleSubmitAddress(e, 'Shipping', `${value.id}`)
                  }
                />
              </EditAddressModal>
            )}
          </div>
        ))}
      </div>
      <div className={styles.addressContent}>
        <div className={styles.addressHead}>
          <h5>Billing Addresses</h5>
          <button
            type="button"
            className={styles.controlProfileButton}
            onClick={() => modalShow('new')}>
            <AddPlusIcon width="1.5rem" height="1.5rem" />
            {textb}
          </button>
        </div>
        {billingAddresses.map((value) => (
          <div key={value.id}>
            <div
              className={`${styles.address} ${defBilling === value.id ? styles.defaultAddress : ''}
                         ${!isVisible[`Billing-${value.id}`] ? styles.showTextAddressContent : styles.hideTextAddressContent}`}>
              <div className={styles.addressControl}>
                <span>
                  <input
                    type="radio"
                    name="billingRadio"
                    id={value.id}
                    checked={defBilling === value.id}
                    onChange={chengDefBillingValue}
                  />
                  set default
                </span>
                <button
                  type="button"
                  className={styles.controlProfileButton}
                  onClick={() => modalShow(`Billing-${value.id}`)}>
                  <EditPencilIcon width="1.5rem" height="1.5rem" />
                  {textb}
                </button>
              </div>
              <div className={styles.addressBlock}>
                <p className={styles.profileContentString}>
                  <span>Country: </span>
                  {Object.values(Country)[Object.keys(Country).indexOf(value.country as Country)]}
                </p>
                <p className={styles.profileContentString}>
                  <span>Postal Code: </span>
                  {value.postalCode}
                </p>
              </div>
              <div className={styles.addressBlock}>
                <p className={styles.profileContentString}>
                  <span>City: </span>
                  {value.city}
                </p>
                <p className={styles.profileContentString}>
                  <span>Street: </span>
                  {value.streetName}
                </p>
              </div>
            </div>
            {isVisible[`Billing-${value.id}`] && (
              <EditAddressModal toggleVisible={() => toggleVisible(`Billing-${value.id}`)}>
                <EditingAddresses
                  id={`Billing-${value.id}`}
                  addressData={value}
                  onSubmit={(e: FormEvent<HTMLFormElement>) =>
                    handleSubmitAddress(e, 'Billing', `${value.id}`)
                  }
                />
              </EditAddressModal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddressesTabContent;
