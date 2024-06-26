import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/pages/Main/main';
import Signup from './view/pages/Signup/signup';
import Notfound from './view/pages/NotFound/not-found';
import Login from './view/pages/Login/Login';
import { AppState } from './data/types/main-props';
import getAnonToken from './data/api/getToken';
import Logout from './view/pages/Logout/logout';
import Profile from './view/pages/Profile/profile';
import Catalog from './view/pages/Catalog/Catalog';
import About from './view/pages/About/about';
import Product from './view/pages/Product/product';
import Cart from './view/pages/Cart/Cart';

function App() {
  if (!(localStorage.getItem('bearerAnonToken') || localStorage.getItem('bearerToken'))) {
    getAnonToken();
  }

  const [state, setState] = useState<AppState>({
    showMsg: true,
    userLoggedIn: false,
    productsAmount: 42,
    changesInCart: 0,
    history: []
    // here we can add new parameters
  });

  useEffect(() => {
    if (localStorage.getItem('bearerToken') && !state.userLoggedIn) {
      setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main state={state} setState={setState} />} />
        <Route path="/catalog" element={<Catalog state={state} setState={setState} />} />
        <Route path="/about" element={<About state={state} setState={setState} />} />
        <Route path="/signup" element={<Signup state={state} setState={setState} />} />
        <Route path="/login" element={<Login state={state} setState={setState} />} />
        <Route path="/cart" element={<Cart state={state} setState={setState} />} />
        {state.userLoggedIn && (
          <>
            <Route path="/profile" element={<Profile state={state} setState={setState} />} />
            <Route path="/logout" element={<Logout state={state} setState={setState} />} />
          </>
        )}
        {!state.userLoggedIn && (
          <>
            <Route path="/profile" element={<Login state={state} setState={setState} />} />
            <Route path="/logout" element={<Login state={state} setState={setState} />} />
          </>
        )}
        <Route path="catalog/product" element={<Product state={state} setState={setState} />} />
        <Route path="catalog/product/:id" element={<Product state={state} setState={setState} />} />
        <Route path="/*" element={<Notfound state={state} setState={setState} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
