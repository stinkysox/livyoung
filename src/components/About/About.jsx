import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="about-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={1}
      >
        <h2>
          We’re <br />
          <span>Livyoung Photography!</span>
        </h2>
        <p>
          A passionate team of storytellers and creative artists capturing
          timeless memories with elegance and emotion. Livyoung Photography
          specializes in turning fleeting moments into lasting works of art,
          blending authenticity with artistic vision.
        </p>
      </motion.div>

      <motion.div
        className="about-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[2, 3, 4].map((i, idx) => (
          <motion.p key={idx} variants={fadeInUp} custom={i}>
            {
              [
                "At Livyoung Photography, we believe that every love story is unique and deserves to be told with care and creativity. From the first glance to the final goodbye, we document each chapter with an eye for detail and a heart for storytelling.",
                "Whether set against the backdrop of a grand celebration or an intimate gathering, our approach remains the same — candid, artistic, and deeply personal. We aim to create photographs that speak not just to the moment, but to the emotions behind them.",
                "With a passion for beauty and a dedication to excellence, we strive to craft visuals that reflect the essence of who you are — vibrant, joyful, and unforgettable.",
              ][idx]
            }
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
