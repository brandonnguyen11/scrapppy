// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmBYgvwcqhiTr0adbakm9LlEkag0wcsJk",
  authDomain: "scrappy-e3d37.firebaseapp.com",
  projectId: "scrappy-e3d37",
  storageBucket: "scrappy-e3d37.firebasestorage.app",
  messagingSenderId: "668878569335",
  appId: "1:668878569335:web:30520dff31b3410b54eb72",
  measurementId: "G-P1B1W0Y7QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    
const auth = getAuth(app);

export { app, auth, analytics };