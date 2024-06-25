import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';
import getAnonToken from '../../../data/api/getToken';

function Logout({ setState }: MainProps) {
  localStorage.removeItem('bearerToken');
  localStorage.removeItem('cart');
  localStorage.removeItem('bearerAnonToken');
  getAnonToken();
  useEffect(() => {
    setState((prevState) => ({ ...prevState, userLoggedIn: false }));
  }, [setState]);
  return <Navigate to="/login" />;
}

export default Logout;
