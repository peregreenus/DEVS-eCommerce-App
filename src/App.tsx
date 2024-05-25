/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/pages/Main/main';
import Signup from './view/pages/Signup/signup';
import Notfound from './view/pages/NotFound/not-found';
import Login from './view/pages/Login/Login';
import { AppState } from './data/types/main-props';
import { getAnonToken } from './data/api/getToken';
import Logout from './view/pages/Logout/logout';
// import { Product } from './view/pages/Product/product';
import { getLSToken } from './data/utils/getLS';
import Product from './view/pages/Product/product';

function App() {
  const [state, setState] = useState<AppState>({
    showMsg: true,
    userLoggedIn: false
    // here we can add new parameters
  });

  if (!getLSToken()) {
    getAnonToken();
  }

  useEffect(() => {
    if (localStorage.getItem('customer') && !state.userLoggedIn) {
      setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main state={state} setState={setState} />} />
        <Route path="/signup" element={<Signup state={state} setState={setState} />} />
        <Route path="/login" element={<Login state={state} setState={setState} />} />
        <Route path="/logout" element={<Logout state={state} setState={setState} />} />
        <Route path="/product" element={<Product state={state} setState={setState} />} />
        <Route path="/product/:id" element={<Product state={state} setState={setState} />} />
        <Route path="/*" element={<Notfound state={state} setState={setState} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
