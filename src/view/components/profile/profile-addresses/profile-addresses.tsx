import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  CustomerAddresses,
  CustomerProfileResponse
} from '../../../../data/types/interfaces/customer.interface';
import * as styles from './profile-addresses.module.css';
import EditPencilIcon from '../../common/icons/editPencilIcon';
import AddPlusIcon from '../../common/icons/addPlusIcon';
import useModal from '../../../../data/hooks/useModal';
import EditAddressModal from './edit-address-modal';
import EditingAddresses from './editing-addresses-form';
import Country from '../../../../data/types/country';
import setCustomerAddress from '../../../../data/api/profile/setAddress';
import { setLSVersionProfileCustomer } from '../../../../data/utils/setLS';
import { ProfileUpdateProps } from '../../../../data/types/profile-props';
import { checkingCountry } from '../../../../data/utils/validate-form';
import setTypeAddress from '../../../../data/api/profile/setTypeAddress';
import RemoveIcon from '../../common/icons/removeIcon';
import removeAddress from '../../../../data/api/profile/deleteAddress';
import SetDefAddress from '../../../../data/api/profile/setDefAddress';

function AddressesTabContent({
  setUpdate,
  addresses,
  shippingAddressIds,
  defaultShippingAddressId,
  billingAddressIds,
  defaultBillingAddressId
}: ProfileUpdateProps) {
  let defShipping: string = '';
  let defBilling: string = '';
  const { isVisible, toggleVisible } = useModal();
  const [isNew, setNew] = useState<boolean>(false);
  const shippingAddresses: CustomerAddresses[] = [];
  const billingAddresses: CustomerAddresses[] = [];
  const textAdd: string = 'add address';
  const textb: string = '';
  let newAddressId: string = '';
  if (shippingAddressIds && billingAddressIds && addresses) {
    shippingAddressIds.forEach((shipEl) => {
      addresses.forEach((addressEl) => {
        if (addressEl.id === shipEl) {
          shippingAddresses.push(addressEl);
        }
        if (addressEl.id === defaultShippingAddressId) {
          defShipping = `${defaultShippingAddressId}`;
        }
      });
    });
    billingAddressIds.forEach((bilEl) => {
      addresses.forEach((addressEl) => {
        if (addressEl.id === bilEl) {
          billingAddresses.push(addressEl);
        }
        if (addressEl.id === defaultBillingAddressId) {
          defBilling = `${defaultBillingAddressId}`;
        }
      });
    });
  }
  function modalShow(key: string, country: string) {
    if (country) {
      checkingCountry.address =
        Object.values(Country)[Object.keys(Country).indexOf(country as Country)];
      setNew(false);
    } else {
      setNew(true);
    }
    toggleVisible(key);
  }

  function setDefault(e: ChangeEvent<HTMLInputElement>, typeAddress: string) {
    SetDefAddress(e.currentTarget.id, typeAddress).then((response) => {
      setLSVersionProfileCustomer(response.version);
      setUpdate((prev) => !prev);
    });
  }

  function setNewAddressId(res: CustomerProfileResponse) {
    if (res.addresses && res.shippingAddressIds && res.billingAddressIds) {
      res.addresses.forEach((addressEl) => {
        if (addressEl.id && res.shippingAddressIds && res.billingAddressIds) {
          if (
            !res.shippingAddressIds.includes(addressEl.id) &&
            !res.billingAddressIds.includes(addressEl.id)
          ) {
            newAddressId = addressEl.id;
          }
        }
      });
    }
  }
  const handleSubmitAddress = async (
    e: FormEvent<HTMLFormElement>,
    typeAddress: string,
    idAddress: string
  ) => {
    e.preventDefault();
    const addressDetails = new FormData(e.currentTarget);
    const updateAddress = JSON.stringify(Object.fromEntries(addressDetails.entries()));
    await setCustomerAddress(updateAddress, idAddress)
      .then((response) => {
        setLSVersionProfileCustomer(response.version);
        setNewAddressId(response);
      })
      .then(() => setTypeAddress(newAddressId, typeAddress))
      .then(() => {
        setUpdate((prev) => !prev);
        modalShow(`${typeAddress}-${idAddress}`, '');
      });
  };
  async function deleteAddress(id: string) {
    await removeAddress(id).then((response) => {
      setLSVersionProfileCustomer(response.version);
      setUpdate((prev) => !prev);
    });
  }

  return (
    <div className={styles.addressesTabContent}>
      <div className={styles.addressContent}>
        <div className={styles.addressHead}>
          <h5>Shipping Addresses</h5>
          <button
            type="button"
            className={`${styles.controlAddressButton} ${styles.addNewAddressButton}`}
            disabled={Object.values(isVisible).includes(true)}
            onClick={() => modalShow('Shipping-new', '')}>
            <AddPlusIcon
              width="1.5rem"
              height="1.5rem"
              fill={Object.values(isVisible).includes(true) ? '#e5e7eb' : 'grey'}
            />
            {textAdd}
          </button>
        </div>
        {isVisible['Shipping-new'] && (
          <EditAddressModal toggleVisible={() => toggleVisible('Shipping-new')}>
            <EditingAddresses
              id="Shipping-new"
              addressData={{ city: '', postalCode: '', streetName: '', country: '' }}
              onClick={() => {
                modalShow('Shipping-new', '');
              }}
              onSubmit={(e: FormEvent<HTMLFormElement>) =>
                handleSubmitAddress(e, 'Shipping', 'new')
              }
              isNew={isNew}
            />
          </EditAddressModal>
        )}
        {shippingAddresses.map((value) => (
          <div id={value.id}>
            <div
              key={value.id}
              className={`${defShipping === value.id ? styles.defaultAddress : ''} ${styles.address} 
              ${!isVisible[`Shipping-${value.id}`] ? styles.showTextAddressContent : styles.hideTextAddressContent}`}>
              <div className={styles.addressControl}>
                <p className={styles.addressRadio}>
                  <input
                    type="radio"
                    name="shippingRadio"
                    id={value.id}
                    checked={defaultShippingAddressId?.includes(`${value.id}`)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDefault(e, 'shipping')}
                  />
                  set default
                </p>
                <div className={styles.controlBlock}>
                  <button
                    type="button"
                    className={styles.controlAddressButton}
                    disabled={Object.values(isVisible).includes(true)}
                    onClick={() => modalShow(`Shipping-${value.id}`, value.country)}>
                    <EditPencilIcon
                      width="1.5rem"
                      height="1.5rem"
                      fill={Object.values(isVisible).includes(true) ? '#e5e7eb' : 'grey'}
                    />
                    {textb}
                  </button>
                  <button
                    type="button"
                    className={styles.controlAddressButton}
                    disabled={Object.values(isVisible).includes(true)}
                    onClick={() => deleteAddress(`${value.id}`)}>
                    <RemoveIcon
                      width="1.5rem"
                      height="1.5rem"
                      fill={Object.values(isVisible).includes(true) ? '#e5e7eb' : 'grey'}
                    />
                    {textb}
                  </button>
                </div>
              </div>
              <div className={styles.addressBlock}>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>Country: </p>
                  {Object.values(Country)[Object.keys(Country).indexOf(value.country as Country)]}
                </div>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>Postal Code: </p>
                  {value.postalCode}
                </div>
              </div>
              <div className={styles.addressBlock}>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>City: </p>
                  {value.city}
                </div>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>Street: </p>
                  {value.streetName}
                </div>
              </div>
            </div>
            {isVisible[`Shipping-${value.id}`] && (
              <EditAddressModal toggleVisible={() => toggleVisible(`Shipping-${value.id}`)}>
                <EditingAddresses
                  id={`Shipping-${value.id}`}
                  addressData={value}
                  onClick={() => {
                    modalShow(`Shipping-${value.id}`, value.country);
                  }}
                  onSubmit={(e: FormEvent<HTMLFormElement>) =>
                    handleSubmitAddress(e, 'Shipping', `${value.id}`)
                  }
                  isNew={isNew}
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
            className={`${styles.controlAddressButton} ${styles.addNewAddressButton}`}
            disabled={Object.values(isVisible).includes(true)}
            onClick={() => modalShow('Billing-new', '')}>
            <AddPlusIcon
              width="1.5rem"
              height="1.5rem"
              fill={Object.values(isVisible).includes(true) ? '#e5e7eb' : 'grey'}
            />
            {textAdd}
          </button>
        </div>
        {isVisible['Billing-new'] && (
          <EditAddressModal toggleVisible={() => toggleVisible('Billing-new')}>
            <EditingAddresses
              id="Billing-new"
              addressData={{ city: '', postalCode: '', streetName: '', country: '' }}
              onClick={() => {
                modalShow('Billing-new', '');
              }}
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmitAddress(e, 'Billing', 'new')}
              isNew={isNew}
            />
          </EditAddressModal>
        )}
        {billingAddresses.map((value) => (
          <div key={value.id}>
            <div
              className={`${defBilling === value.id ? styles.defaultAddress : ''} ${styles.address}
                         ${!isVisible[`Billing-${value.id}`] ? styles.showTextAddressContent : styles.hideTextAddressContent}`}>
              <div className={styles.addressControl}>
                <p className={styles.addressRadio}>
                  <input
                    type="radio"
                    name="billingRadio"
                    id={value.id}
                    checked={defaultBillingAddressId?.includes(`${value.id}`)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDefault(e, 'billing')}
                  />
                  set default
                </p>
                <div className={styles.controlBlock}>
                  <button
                    type="button"
                    className={styles.controlAddressButton}
                    disabled={Object.values(isVisible).includes(true)}
                    onClick={() => modalShow(`Billing-${value.id}`, value.country)}>
                    <EditPencilIcon
                      width="1.5rem"
                      height="1.5rem"
                      fill={Object.values(isVisible).includes(true) ? '#e5e7eb' : 'grey'}
                    />
                    {textb}
                  </button>
                  <button
                    type="button"
                    className={styles.controlAddressButton}
                    disabled={Object.values(isVisible).includes(true)}
                    onClick={() => deleteAddress(`${value.id}`)}>
                    <RemoveIcon
                      width="1.5rem"
                      height="1.5rem"
                      fill={Object.values(isVisible).includes(true) ? '#e5e7eb' : 'grey'}
                    />
                    {textb}
                  </button>
                </div>
              </div>
              <div className={styles.addressBlock}>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>Country: </p>
                  {Object.values(Country)[Object.keys(Country).indexOf(value.country as Country)]}
                </div>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>Postal Code: </p>
                  {value.postalCode}
                </div>
              </div>
              <div className={styles.addressBlock}>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>City: </p>
                  {value.city}
                </div>
                <div className={styles.addressContentString}>
                  <p className={styles.fieldName}>Street: </p>
                  {value.streetName}
                </div>
              </div>
            </div>
            {isVisible[`Billing-${value.id}`] && (
              <EditAddressModal toggleVisible={() => toggleVisible(`Billing-${value.id}`)}>
                <EditingAddresses
                  id={`Billing-${value.id}`}
                  addressData={value}
                  onClick={() => {
                    modalShow(`Billing-${value.id}`, value.country);
                  }}
                  onSubmit={(e: FormEvent<HTMLFormElement>) =>
                    handleSubmitAddress(e, 'Billing', `${value.id}`)
                  }
                  isNew={isNew}
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
