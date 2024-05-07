import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/pages/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
