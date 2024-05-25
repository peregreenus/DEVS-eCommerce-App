import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { MainProps } from '../../../data/types/main-props';
import { bearerAnonToken } from '../../../data/api/getToken';

function Logout({ setState }: MainProps) {
  localStorage.removeItem('bearerToken');
  localStorage.removeItem('cart');
  bearerAnonToken.token = null;
  useEffect(() => {
    setState((prevState) => ({ ...prevState, userLoggedIn: false }));
  }, [setState]);
  return <Navigate to="/login" />;
}

export default Logout;
