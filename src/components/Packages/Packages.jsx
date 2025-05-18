import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar"; // Adjust the import path as needed
import "./Packages.css";
import Footer from "../Footer/Footer";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// Adjust the import path as needed

const Packages = () => {
  // Custom welcome configuration for packages page
  const packagesWelcomeConfig = {
    backgroundImage: "https://i.postimg.cc/X7Yg76W5/IMG-2247.jpg", // Replace with your desired image
    title: "Discover Our Wedding Packages",
    subtitle: "EXPLORE",
    showWelcome: true,
  };

  const packages = [
    {
      id: 1,
      category: "Artisan",
      title: "Wedding Photography",
      description:
        "Our artisan wedding photography blends editorial elegance with documentary-style storytelling, ensuring every moment is captured with depth and authenticity.",
      features: {
        title: "Why it's special:",
        items: [
          "Thoughtfully composed fine-art portraits with a luxury editorial touch.",
          "Unscripted, emotive moments captured with a keen artistic eye.",
          "Designed for couples who value timeless, sophisticated photography.",
        ],
      },
      price: "Starts from ₹2,50,000 /- per event.",
      image:
        "https://i.pinimg.com/736x/d1/b2/9a/d1b29ab5af59f15a30268fd88ba0ed44.jpg",
      imageAlt: "Couple on elegant staircase with flowers",
      reverse: false,
    },
    {
      id: 2,
      category: "Narrative",
      title: "Wedding Films",
      description:
        "A wedding film should feel like a deeply personal cinematic experience, crafted with emotion, artistry, and intention. Our bespoke wedding films are immersive, thoughtfully woven narratives—more than just a sequence of moments, they are a living memory of your love story.",
      features: {
        title: "What makes it unique:",
        items: [
          "No two films are alike—each story is personally crafted",
          "Captures the unspoken moments & emotions between the big celebrations",
          "A luxury wedding film that feels like a movie, not just a highlight reel",
        ],
      },
      price: "Starts from ₹2,50,000 /- per event.",
      image:
        "https://i.pinimg.com/736x/02/3d/46/023d46717a78d03569cfc7094ad1adb1.jpg",
      imageAlt: "Intimate couple moment in golden light",
      reverse: true,
    },
    {
      id: 3,
      title: "Pre-Wedding & Couple Shoots",
      subtitle: "Capturing the Real You",
      description:
        "Step beyond the rituals and capture your real connection—your laughter, your rhythm, your love. These shoots reflect who you are when the cameras aren't expected, but the story still unfolds.",
      features: {
        title: "Why it matters:",
        items: [
          "See your love in its most natural form—beyond the wedding rituals.",
          "A relaxed way to get comfortable in front of the camera.",
          "Adds a personal, storytelling touch to your wedding album and film",
        ],
      },
      price: "Starts from ₹3,00,000 /-",
      image:
        "https://i.pinimg.com/736x/52/5a/84/525a845546e418faa852f9c7b5ddc11a.jpg",
      imageAlt: "Couple in warm sunset light",
      reverse: false,
    },
    {
      id: 4,
      title: "Beyond Photography & Films",
      subtitle: "Enhancing Your Wedding Experience",
      description:
        "Step beyond the rituals and capture your real connection—your laughter, your moments. We believe every love story has layers. For those who seek deeper storytelling and finer details, we offer a selection of thoughtfully crafted enhancements that enrich the way your memories are preserved.",
      features: {
        items: [
          "Customized Music Scores",
          "Handcrafted Albums",
          "Same day On Site Editing",
          "Fast Track Delivery within 30 days.",
        ],
      },
      addOns: "Add-ons available upon consultation",
      image:
        "https://i.pinimg.com/736x/05/5d/5c/055d5c970e0ecc95fd91bcdf7a320d28.jpg",
      imageAlt: "Couple in dramatic snowy scene",
      reverse: true,
    },
  ];

  // Process steps data
  const processSteps = [
    {
      id: 1,
      step: "STEP 01",
      title: "Let's Connect",
      description:
        "Fill out the inquiry form – Tell us about your wedding vision, style, and details.",
      additionalInfo:
        "FaceTime Call or In-Person Meet-Up – We get to know you, understand your story, and customize a photography experience that reflects your love.",
    },
    {
      id: 2,
      step: "STEP 02",
      title: "Secure Your Date",
      description: "Once you're ready, a retainer secures your wedding date.",
      additionalInfo:
        "We'll send a customized contract tailored to your unique requirements",
    },
    {
      id: 3,
      step: "STEP 03",
      title: "Story & Styling Session",
      description:
        "We schedule a creative meeting with our Lead Photographers & Filmmakers to plan your visual narrative.",
      additionalInfo:
        "Together, we craft mood boards, timelines, and shot lists to ensure your wedding is documented seamlessly.",
    },
    {
      id: 4,
      step: "STEP 04",
      title: "The Big Day",
      subtitle: "Stress-Free & Seamless",
      description:
        "Our expert team arrives early to capture the essence of the day. From candid emotions to editorial portraits, we document every detail with precision and artistry.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const packageVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const processVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Navbar welcomeConfig={packagesWelcomeConfig} />

      <motion.div
        className="packages-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {packages.map((pkg, index) => (
          <motion.section
            key={pkg.id}
            className={`package-section ${pkg.reverse ? "reverse" : ""}`}
            variants={packageVariants}
          >
            <div className="package-content">
              <motion.div className="package-image" variants={imageVariants}>
                <motion.img
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div className="package-text" variants={textVariants}>
                {pkg.category && (
                  <motion.span
                    className="package-category"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {pkg.category}
                  </motion.span>
                )}
                <motion.h2
                  className="package-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {pkg.title}
                </motion.h2>
                {pkg.subtitle && (
                  <motion.span
                    className="package-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {pkg.subtitle}
                  </motion.span>
                )}
                <motion.p
                  className="package-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {pkg.description}
                </motion.p>
                {pkg.features && (
                  <motion.div
                    className="package-features"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {pkg.features.title && <h3>{pkg.features.title}</h3>}
                    <ul>
                      {pkg.features.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + itemIndex * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    {pkg.addOns && (
                      <motion.div
                        className="add-ons-note"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <em>{pkg.addOns}</em>
                      </motion.div>
                    )}
                  </motion.div>
                )}
                {pkg.price && (
                  <motion.div
                    className="package-price"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <em>{pkg.price}</em>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </motion.div>

      {/* Process Section */}
      <motion.section
        className="process-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="process-header" variants={processVariants}>
          <h2 className="process-main-title">Our Process</h2>
          <p className="process-main-subtitle">
            From first contact to final delivery
          </p>
        </motion.div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="process-step"
              variants={processVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="step-content">
                <motion.span
                  className="step-number"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {step.step}
                </motion.span>
                <motion.h3
                  className="step-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {step.title}
                </motion.h3>
                {step.subtitle && (
                  <motion.span
                    className="step-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {step.subtitle}
                  </motion.span>
                )}
                <motion.p
                  className="step-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {step.description}
                </motion.p>
                {step.additionalInfo && (
                  <motion.p
                    className="step-additional-info"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {step.additionalInfo}
                  </motion.p>
                )}
              </div>
              <motion.div
                className="step-divider"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="package-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://wa.me/917799099943"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon whatsapp"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.instagram.com/livyoungphotography"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon instagram"
            title="View on Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>

        <Footer />
      </motion.section>
    </>
  );
};

export default Packages;
