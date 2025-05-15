import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">LivYoung Photography</div>
        {!isOpen && (
          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        )}
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay open"
            initial={{ left: "100%" }}
            animate={{ left: 0 }}
            exit={{ left: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="menu-btn close-btn"
              onClick={toggleMenu}
              aria-label="Close Menu"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoMdClose />
            </motion.button>

            <nav className="menu-content">
              <ul>
                {[
                  "About us",
                  "The Vows Experience",
                  "Offerings & Availability",
                  "Reviews",
                  "Vision & Philosophy",
                  "FAQ'S",
                  "Press & Awards",
                  "Wedding Podcast",
                  "Blogs on Wedding Planning",
                  "Collaborations",
                ].map((item) => (
                  <motion.li key={item} whileHover={{ scale: 1.1 }}>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="welcome-section">
        <div className="welcome-text">
          <p>WELCOME</p>
          <h1>
            We're So Happy <br /> You're Here!
          </h1>
        </div>
      </section>
    </>
  );
};

export default Navbar;
