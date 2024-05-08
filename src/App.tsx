import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/pages/main';
import Signup from './view/pages/Signup/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
