import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/pages/Main/main';
import Signup from './view/pages/Signup/signup';
import Notfound from './view/pages/NotFound/not-found';
import Login from './view/pages/Login/Login';
import { AppState } from './data/types/main-props';

function App() {
  const [state, setState] = useState<AppState>({
    showMsg: true,
    userLoggedIn: false
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main state={state} setState={setState} />} />
        <Route path="/signup" element={<Signup state={state} setState={setState} />} />
        <Route path="/login" element={<Login state={state} setState={setState} />} />
        <Route path="/*" element={<Notfound state={state} setState={setState} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
