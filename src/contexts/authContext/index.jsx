import { use } from "react";
import { auth } from "../../firebase/firebase";
import React, { useState, useEffect, useContext } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth(){ // hook to use auth context
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}