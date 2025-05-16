import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Samantha Lee",
    role: "Bride",
    quote:
      "LivYoung captured every magical moment of our wedding. The photos are timeless!",
    image: "/assets/bride1.jpg",
  },
  {
    name: "David Kim",
    role: "Model",
    quote:
      "A phenomenal eye for beauty! LivYoung turns moments into visual poetry.",
    image: "/assets/model.jpg",
  },
  {
    name: "Aria Thompson",
    role: "Mother",
    quote:
      "She captured our newborn's first moments perfectly. We'll cherish these forever.",
    image: "/assets/mother.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"{testimonial.quote}"</p>
              <div className="testimonial-user">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="user-image"
                />
                <div>
                  <h4 className="user-name">{testimonial.name}</h4>
                  <p className="user-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
