import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/pages/Main/main';
import Notfound from './view/pages/NotFound/not-found';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
