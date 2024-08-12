import React, { useState } from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Pass the search term to the parent component
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">ScriptSanctuary</h1>
          <ul className="nav-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/trending">Trending</a>
            </li>
            <li>
              <a href="/bookclub">Book Club</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
