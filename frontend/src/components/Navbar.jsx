import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const {user, logout} = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/The (3).gif" alt="The Blogpick Logo" className="logo" />
          <h4 className="brand-name">Read. Think. Share.</h4>
        </div>
        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/posts" onClick={() => setMenuOpen(false)}>Posts</Link></li>
          {user ? (
            <li><Link to="/create" onClick={() => setMenuOpen(false)}>Create</Link></li>
          ):(
            <li>
              <Link
                to="/register"
                className="Register-btn"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          )}

          {user ? (
            <li className="user-nav">
              <span className="username" onClick={() => {navigate("/Dashboard")}}>
                👤 {user.username}
              </span>
              <button
                className="logout-btn"
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="login-btn"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
