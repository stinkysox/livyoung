import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi"; // For X (Twitter)

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">LivYoung Photography</h2>

      <p className="footer-tagline">
        Celebrating life’s most meaningful moments through storytelling frames.
      </p>

      <p className="footer-note">
        • Weddings · Rituals · Portraits · Cultural Events
      </p>

      <p className="footer-contact">hello@livyoung.com | +91 77990 99943</p>

      <p className="footer-address">
        Based in Hyderabad · Available for travel across India and
        internationally
      </p>

      <div className="footer-socials">
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter / X">
          <PiXLogoBold />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Pinterest">
          <FaPinterestP />
        </a>
        <a href="#" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>

      <p className="footer-copyright">
        © 2025 LivYoung Photography · All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
