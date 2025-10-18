import React, { useState } from "react";
import styles from "../styles/AuthPopup.module.css"; // Updated CSS Import

const AuthPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Login Submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setOtpSent(true); // Simulate OTP sent
  };

  // Handle Signup Input Change
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.authPopup}>
      {/* Close Button Outside */}
        <button className={styles.closeBtn} onClick={onClose}>✖</button>

        <div className={styles.authContainer}>
            {/* Left Side Branding */}
            <div className={styles.authLeft}>
            <h2>Welcome to Bhagirathi Gangajal</h2>
            <p>Get fresh and pure Gangajal delivered to your doorstep.</p>
            </div>

            {/* Right Side Form */}
            <div className={styles.authRight}>
            <h2 style={{textAlign:"center"}}>{isLogin ? "Login" : "Create Account"}</h2>
            <p onClick={() => setIsLogin(!isLogin)} className={styles.toggleLink}>
                {isLogin ? "New here? Create an account" : "Already have an account? Login"}
            </p>

            {/* Login Form */}
            {isLogin ? (
                <form onSubmit={handleLoginSubmit}>
                <input
                    type="text"
                    placeholder="Email or Phone"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    required
                />
                {otpSent && (
                    <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    />
                )}
                <button type="submit">{otpSent ? "Verify OTP" : "Get OTP"}</button>
                </form>
            ) : (
                // Signup Form
                <form>
                <input type="text" name="name" placeholder="Full Name" onChange={handleSignupChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleSignupChange} required />
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleSignupChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleSignupChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleSignupChange} required />
                <button type="submit">Sign Up</button>
                </form>
            )}
            </div>
        </div>
    </div>
  );
};

export default AuthPopup;
