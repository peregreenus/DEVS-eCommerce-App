import React from 'react';
import { Navigate } from 'react-router-dom';

function Logout() {
  localStorage.removeItem('bearerToken');
  localStorage.removeItem('cart');
  return <Navigate to="/login" />;
}

export default Logout;
