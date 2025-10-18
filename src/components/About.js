import React from 'react';
import styles from '../styles/About.module.css'; // Custom styles for About page

const About = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h1 className={styles.heading}>About Bhagirathi Gangajal</h1>
        <p className={styles.description}>
          Welcome to Bhagirathi Gangajal, your trusted source for pure and sacred Gangajal.
          Our mission is to deliver the holy waters of the Ganges directly to your doorstep, ensuring
          the highest level of purity and sanctity for your religious and spiritual practices.
        </p>
        <h2 className={styles.subHeading}>Our Vision</h2>
        <p className={styles.description}>
          We strive to make it easy for devotees to access holy water without the need for long journeys.
          Our commitment is to maintain the authenticity, purity, and spiritual significance of Gangajal,
          bridging tradition with modern convenience.
        </p>
        <h2 className={styles.subHeading}>Why Choose Us?</h2>
        <ul className={styles.list}>
          <li>100% Pure and Authentic Gangajal, sourced from the most sacred origins.</li>
          <li>Carefully packaged to preserve its purity and divine essence.</li>
          <li>Fast, reliable, and secure nationwide delivery.</li>
          <li>Dedicated to upholding spiritual traditions while offering modern accessibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
