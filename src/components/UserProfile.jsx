import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const UserProfile = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="user-profile ms-2">
      <div
        className="profile-icon border rounded p-2"
        onMouseEnter={() => setShowLogin(true)}
        onMouseLeave={() => setShowLogin(false)}
      >
        👤
        {showLogin && (
          <div className="profile-dialog position-absolute bg-white border p-2">
            <button onClick={() => setShowLogin(true)} className="btn btn-primary mb-2">Login</button>
            <button onClick={() => setShowSignup(true)} className="btn btn-secondary">Sign Up</button>
          </div>
        )}
      </div>
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <SignupModal show={showSignup} handleClose={() => setShowSignup(false)} />
    </div>
  );
};

export default UserProfile;
