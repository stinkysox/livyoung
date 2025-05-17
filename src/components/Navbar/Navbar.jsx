import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const menuItems = [
  { label: "Home", id: "/" },
  { label: "About us", id: "about" },
  { label: "Gallery", id: "gallery" },

  { label: "Explore Packages", id: "packages" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Films", id: "films" },
];

const Navbar = ({ welcomeConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Default welcome configuration
  const defaultWelcomeConfig = {
    backgroundImage: "https://i.postimg.cc/HWK26PX1/IMG-2281.jpg", // Default background (or you can set a default image)
    title: "We're So Happy You're Here!",
    subtitle: "WELCOME",
    showWelcome: true,
  };

  // Merge default config with passed config
  const finalWelcomeConfig = { ...defaultWelcomeConfig, ...welcomeConfig };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [isOpen]);

  const handleMenuClick = (id) => {
    setIsOpen(false);
    if (id === "/") {
      navigate("/");
    } else if (id === "testimonials") {
      navigate("/testimonials");
    } else if (id === "packages") {
      navigate("/packages");
    } else if (id === "gallery") {
      navigate("/gallery");
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`} role="banner">
        <div className="navbar-logo">
          <img
            src="https://i.postimg.cc/wMBHqHP1/Beige-Minimalist-Initial-Font-Floral-Agency-Logo-pdf-page-0001.jpg"
            alt="LivYoung Photography Logo"
            className="logo-img"
          />
        </div>

        <p>Livyoung Photography</p>

        {!isOpen && (
          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Open Menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
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
            tabIndex={-1}
            ref={menuRef}
            role="navigation"
            aria-label="Primary navigation"
            id="primary-navigation"
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
                {menuItems.map(({ label, id }) => (
                  <motion.li key={id} whileHover={{ scale: 1.1 }}>
                    <button
                      className="menu-link-btn"
                      onClick={() => handleMenuClick(id)}
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conditional Welcome Section */}
      {finalWelcomeConfig.showWelcome && (
        <section
          className="welcome-section"
          tabIndex={-1}
          style={{
            backgroundImage: finalWelcomeConfig.backgroundImage
              ? `url(${finalWelcomeConfig.backgroundImage})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="welcome-text">
            <p>{finalWelcomeConfig.subtitle}</p>
            <h1>
              {finalWelcomeConfig.title.includes("<br />")
                ? finalWelcomeConfig.title
                    .split("<br />")
                    .map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        {index <
                          finalWelcomeConfig.title.split("<br />").length -
                            1 && <br />}
                      </React.Fragment>
                    ))
                : finalWelcomeConfig.title}
            </h1>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
