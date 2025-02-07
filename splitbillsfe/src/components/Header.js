import React, { useState } from "react";
import "./Header.css";
import LoginForm from "../autform/loginForm";
import RegisterForm from "../autform/registerForm";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <header className="app-header">
      <div className="auth-buttons">
        <button className="btn login" onClick={() => setShowLogin(true)}>
          Login
        </button>
        <button className="btn register" onClick={() => setShowRegister(true)}>
          Register
        </button>
      </div>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterForm onClose={() => setShowRegister(false)} />}
    </header>
  );
}

export default Header;
