import React, { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import './LoginPage.css';
import { doSignInWithEmailAndPassword } from './firebase/auth';
import { doSignInWithGoogle } from './firebase/auth';
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

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    
    if (!isSigningIn) {
      setIsSigningIn(true);
      setErrorMessage('');
      
      try {
        await doSignInWithEmailAndPassword(email, password);
        console.log('Logging in with:', { email, keepLoggedIn });
        navigate('/');
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
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
      {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
      
      {/* Right side - Login form */}
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <h1 className="login-title">Log in to Scrappy</h1>
          
          <div className="login-form">
            {/* Error message */}
            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}

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
              <button onClick={handleLogin} className="btn btn-primary" disabled={isSigningIn}>
                {isSigningIn ? 'Logging in...' : 'Log In'}
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

            {/* Google Sign In button */}
            <button onClick={onGoogleSignIn} className="btn btn-google" disabled={isSigningIn}>
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Log in with Google
            </button>

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