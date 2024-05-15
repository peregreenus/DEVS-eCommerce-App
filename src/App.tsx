import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './view/pages/Main/main';
import Signup from './view/pages/Signup/signup';
import Notfound from './view/pages/NotFound/not-found';
import Login from './view/pages/Login/Login';

function App() {
  const [showMsg, setShowMsg] = useState<boolean>(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main showMsg={showMsg} setShowMsg={setShowMsg} />} />
        <Route path="/" element={<Main showMsg={showMsg} setShowMsg={setShowMsg} />} />
        <Route path="/signup" element={<Signup showMsg={showMsg} setShowMsg={setShowMsg} />} />
        <Route path="/login" element={<Login showMsg={showMsg} setShowMsg={setShowMsg} />} />
        <Route path="/*" element={<Notfound showMsg={showMsg} setShowMsg={setShowMsg} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
