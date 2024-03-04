import React, { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // For demonstration purposes, let's assume login is successful if email and password are not empty
    // Replace this condition with your actual login logic
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <NavBar /> : <LoginPage handleLogin={handleLogin} />}
      {/* {!isLoggedIn ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <div>
          <DashboardPage />
          <UserPage />
        </div>
      )} */}
    </div>
  );
}

export default App;
