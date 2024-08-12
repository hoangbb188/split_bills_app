import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <div className="auth-buttons">
        <button className="btn login">Login</button>
        <button className="btn register">Register</button>
      </div>
    </header>
  );
}

export default Header;
