import React from 'react';
import { Link } from 'react-router-dom';
import { MainProps } from '../../../../data/types/main-props';

function NologinMessage({ showMsg, setShowMsg }: MainProps) {
  // const [hidden, setHidden] = useState(false);

  function hideMessage() {
    setShowMsg(false);
  }

  return (
    <div className={`no-login-message ${!showMsg ? 'message-hide' : ''}`}>
      {showMsg && (
        <>
          <div className="wrapper">
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
