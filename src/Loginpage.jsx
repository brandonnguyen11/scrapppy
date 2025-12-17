import React, { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import './LoginPage.css';

import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "./firebase/auth";
import { useAuth } from "./contexts/authContext";


function LoginPage() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSigningIn) return;

    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
      navigate('/');
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();

    if (isSigningIn) return;

    try {
      setIsSigningIn(true);
      await doSignInWithGoogle();
      navigate('/');
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <h1 className="login-title">Log in to Scrappy</h1>

          {errorMessage && <p className="error-text">{errorMessage}</p>}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
              />
              <label>Keep me logged in</label>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSigningIn}>
              {isSigningIn ? 'Signing in...' : 'Log In'}
            </button>

            <button onClick={onGoogleSignIn} className="btn btn-secondary">
              Sign in with Google
            </button>

            <div className="signup-link">
              <span>Not on Scrappy? </span>
              <Link to="/signup">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
