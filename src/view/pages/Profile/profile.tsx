/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import getCustomerProfile from '../../../data/api/customerProfile';
import { Customer } from '../../../data/types/interfaces/customer.interface';
import { MainProps } from '../../../data/types/main-props';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';

export default function Profile({ state, setState }: MainProps) {
  const [customer, setCustomer] = useState<Customer>();
  useEffect(() => {
    async function getCustomerInfo() {
      const fetchedInfo = await getCustomerProfile(`${localStorage.getItem('bearerToken')}`);
      console.log(fetchedInfo);
      setCustomer({ ...fetchedInfo });
    }
    getCustomerInfo();
  }, []);

  return (
    <>
      <Header state={state} setState={setState} />
      <h2>Profile</h2>
      <div>{customer?.firstName}</div>
      <div>{customer?.lastName}</div>
      <div>{customer?.email}</div>
      <div>{customer?.dateOfBirth}</div>
      <div>{JSON.stringify(customer?.addresses)}</div>
      <Footer />
    </>
  );
}
