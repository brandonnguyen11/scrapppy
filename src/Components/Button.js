import React from "react";
import './buttonStyle.css'; // Import the CSS file

function Button({ text, variant = 'primary', onClick }) {
  const variantClasses = {
    login: 'login-btn',
    signup: 'signup-btn',
  };

  return (
    <button 
      className={variantClasses[variant]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;