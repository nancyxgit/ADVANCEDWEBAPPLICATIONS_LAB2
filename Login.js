import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //to handle the login button press
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMessage('Username cannot be empty!');
      return;
    }
    setErrorMessage('');
    onLogin(username);
  };

  return (
    <div className="login-container">
      <h2>Please enter your username</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form-input"
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
