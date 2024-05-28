/* eslint-disable no-console */
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

function App() {
  if (!localStorage.getItem('bearerAnonToken') && !localStorage.getItem('bearerToken')) {
    getAnonToken();
  }
  const [state, setState] = useState<AppState>({
    showMsg: true,
    userLoggedIn: false
    // here we can add new parameters
  });

  useEffect(() => {
    const bearerToken = localStorage.getItem('bearerToken');
    if (bearerToken && !state.userLoggedIn) {
      setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));
    }
  }, [state.userLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main state={state} setState={setState} />} />
        <Route path="/signup" element={<Signup state={state} setState={setState} />} />
        <Route path="/login" element={<Login state={state} setState={setState} />} />
        {state.userLoggedIn && (
          <>
            <Route path="/profile" element={<Profile state={state} setState={setState} />} />
            <Route path="/logout" element={<Logout state={state} setState={setState} />} />
          </>
        )}
        <Route path="/*" element={<Notfound state={state} setState={setState} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
