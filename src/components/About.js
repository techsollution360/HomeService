import React from 'react';
import styles from '../styles/About.module.css'; // Custom styles for About page

const About = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <h1 className={styles.heading}>About Home Services</h1>
        <p className={styles.description}>
          Welcome to <strong>Home Services</strong> - Dehradun's trusted platform for reliable,
          professional, and affordable home service solutions. From beauty and wellness to cleaning,
          appliance repair, and maintenance, we bring verified experts right to your doorstep, ensuring
          convenience, comfort, and quality every time.
        </p>

        <h2 className={styles.subHeading}>Our Mission</h2>
        <p className={styles.description}>
          Our mission is to make everyday life easier for people in Dehradun by connecting them with
          skilled and trusted professionals for all their home service needs. We are dedicated to
          delivering reliable, safe, and high-quality services that bring peace of mind to every
          household we serve.
        </p>

        <h2 className={styles.subHeading}>Our Vision</h2>
        <p className={styles.description}>
          We envision a city where finding home service experts is simple, quick, and transparent. By
          combining technology with trust, we strive to empower local professionals while creating a
          seamless service experience for customers — anytime, anywhere in Dehradun.
        </p>

        <h2 className={styles.subHeading}>Why Choose Us?</h2>
        <ul className={styles.list}>
          <li>Trusted & Verified Professionals ensuring safety and reliability.</li>
          <li>Wide range of home services — from salon, cleaning, repair to maintenance.</li>
          <li>Affordable and transparent pricing with no hidden costs.</li>
          <li>Fast, hassle-free, and on-time doorstep service.</li>
          <li>Proudly based in Dehradun — local experts who understand your needs.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
