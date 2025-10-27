import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';
import {doSignInWithEmailAndPassword} from '../../../firebase/auth';
import { doSignInWithGoogle } from './firebase/authService';
import { auth } from './firebase/firebase';
import { useAuth } from './contexts/authContext';

function LoginPage() {

  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if(!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password)
    }

    
    if (email && password) {
      console.log('Logging in with:', { email, password, keepLoggedIn });
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if(!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div className="login-container">
      {/* Left side - Animated background */}
      <div className="login-animated-bg">
        
      </div>
      {userLoggedIn && (<Navigate to={'home'} replace={true} />)}
      
      {/* Right side - Login form */}
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <h1 className="login-title">Log in to Scrappy</h1>
          
          <div className="login-form">
            {/* Email field */}
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder=""
              />
            </div>

            {/* Password field */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? (
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Keep me logged in */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                className="checkbox-input"
              />
              <label htmlFor="keepLoggedIn" className="checkbox-label">
                Keep me logged in for up to 30 days
              </label>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button onClick={handleLogin} className="btn btn-primary">
                Log In
              </button>
              <button onClick={() => alert('Help clicked')} className="btn btn-secondary">
                Help
              </button>
            </div>

            {/* Divider */}
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
            </div>

            {/* Passkeys button */}
            <button onClick={() => navigate('/')} className="btn btn-passkeys">
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              Log in with passkeys
            </button>

            {/* Sign up link */}
            <div className="signup-link">
              <span className="signup-text">Not on Scrappy? </span>
              <Link to="/signup" className="signup-link-text">
                Create an account
              </Link>
            </div>

            {/* Footer */}
            <div className="login-footer">
              This site is protected by reCAPTCHA and the Google{' '}
              <button className="footer-link">Privacy Policy</button>,{' '}
              <button className="footer-link">Terms of Service</button> apply.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;