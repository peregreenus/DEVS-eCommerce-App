import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NologinMessage() {
  const [hidden, setHidden] = useState(false);
  function hideMessage() {
    setHidden(true);
  }

  return (
    <div className={`no-login-message ${hidden ? 'hide' : ''}`}>
      {!hidden && (
        <>
          <div className="text">
            <span>You are unauthorized user</span>
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
          </div>
          <button className="close" type="button" onClick={hideMessage}>
            x
          </button>
        </>
      )}
    </div>
  );
}

export default NologinMessage;
