import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and About */}
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>Bhagirathi Gangajal</h2>
          <p>Your trusted source for pure and sacred Gangajal.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: support@bhagirathigangajal.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: Haridwar, India</p>
        </div>

        {/* Newsletter Subscription */}
        <div className={styles.footerSection}>
          <h3>Subscribe to Our Newsletter</h3>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialIcons}>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Bhagirathi Gangajal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
