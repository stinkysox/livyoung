import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi"; // For the "X" (Twitter) icon

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">Livyoung Photography</h2>

      <p className="footer-note">
        1000+ transformed lives since 2015, © 2025, livyoung photography
      </p>
      <p className="footer-contact">hello@livyoung.com | +91 7799099943</p>

      <div className="footer-socials">
        <FaFacebookF />
        <PiXLogoBold />
        <FaInstagram />
        <FaPinterestP />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;
