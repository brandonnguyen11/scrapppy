import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
} from "firebase/auth";

/* Create account */
export const doCreateUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/* Email / password login */
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/* Google login */
export const doSignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

/* Sign out */
export const doSignOut = () => {
  return auth.signOut();
};

/* Reset password */
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

/* Change password */
export const doPasswordChange = (password) => {
  if (!auth.currentUser) throw new Error("No authenticated user");
  return updatePassword(auth.currentUser, password);
};

/* Email verification */
export const doSendEmailVerification = () => {
  if (!auth.currentUser) throw new Error("No authenticated user");
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
