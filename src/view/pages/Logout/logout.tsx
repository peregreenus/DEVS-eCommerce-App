import React from 'react';
import { Navigate } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';

function Logout({ setState }: MainProps) {
  localStorage.removeItem('bearerToken');
  localStorage.removeItem('cart');
  setState((prevState) => ({ ...prevState, userLoggedIn: false }));
  return <Navigate to="/login" />;
}

export default Logout;
