import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import LoginPage from "./Loginpage";
import SignUpPage from "./SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
}

export default App;