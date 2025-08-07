import React, { useState } from 'react';
import Profile from './Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>

      <Profile isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
