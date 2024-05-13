import React, { useState } from 'react';

function NologinMessage() {
  const [hidden, setHidden] = useState(false);
  function hideMessage() {
    setHidden(true);
  }

  return (
    <div className={`no-login-message ${hidden ? 'hide' : ''}`}>
      {!hidden && (
        <>
          <div className="text">You are unauthorized user</div>
          <button className="close" type="button" onClick={hideMessage}>
            x
          </button>
        </>
      )}
    </div>
  );
}

export default NologinMessage;
