import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';  // Custom styles
import AuthPopup from "./AuthPopup";
import About from "./About"; // Import the About component

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAbout, setShowAbout] = useState(false); // State for About modal
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}>
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className={`navbar-brand ${styles.logo}`}>
            <img src="/logos/HSA.png" alt="Home Services" className={styles.logoImage} />
          </Link>
          
          {/* Search Bar in Center */}
          <form className={`d-flex mx-auto ${styles.searchForm}`} onSubmit={handleSearch}>
            <input
              id='SearchBox'
              className={` ${styles.searchInput}`}
              type="search"
              placeholder="Search services..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={` ${styles.searchButton}`} type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Navbar Toggler for mobile view */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <button className={styles.navLoginBtn} onClick={() => setShowPopup(true)}>
            Login / Signup
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${styles.navLink}`}>Home</Link>
              </li>
              <li className="nav-item">
                {/* Open About Modal Instead of Navigating */}
                <button className={`nav-link ${styles.navLink}`} onClick={() => setShowAbout(true)}>About</button>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${styles.navLink}`}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className={`nav-link ${styles.navLink}`}><FaShoppingCart /> Services Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Auth Popup */}
      {showPopup && <AuthPopup onClose={() => setShowPopup(false)} />}

      {/* About Modal */}
      {showAbout && <About onClose={() => setShowAbout(false)} />}
    </>
  );
};

export default Navbar;
