/* eslint-disable no-console */
import React from 'react';
import getCustomerProfile from '../../../data/api/customerProfile';
import { Customer } from '../../../data/types/interfaces/customer.interface';
import { MainProps } from '../../../data/types/main-props';
import Header from '../../components/common/header/header';

export default async function Profile({ state, setState }: MainProps) {
  const token: string = `${localStorage.getItem('bearerToken')}`;
  const customer: Customer = await getCustomerProfile(token);
  return (
    <div>
      <Header state={state} setState={setState} />
      <h2>Profile</h2>
      <div> {`${customer.firstName}`}</div>
    </div>
  );
}
