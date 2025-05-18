import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ananya Ramesh",
    role: "Bride",
    quote:
      "LivYoung beautifully captured every ritual of our Tamil wedding. The moments feel alive in every picture!",
  },
  {
    name: "Karthik Iyer",
    role: "Classical Dancer",
    quote:
      "The essence of Bharatanatyam was portrayed with such grace through LivYoung’s lens. Truly stunning work!",
  },
  {
    name: "Revathi Nair",
    role: "Mother",
    quote:
      "Our baby’s annaprashan was captured so wonderfully. These photos are now precious memories for life.",
  },
  {
    name: "Ajay Varma",
    role: "Groom",
    quote:
      "From the haldi to the reception, every frame was vibrant and full of emotion. Highly recommended!",
  },
  {
    name: "Meera Krishnan",
    role: "Fashion Blogger",
    quote:
      "Working with LivYoung was effortless. They brings out the best angles and moods in every shoot!",
  },
  {
    name: "Dr. Rohini Shankar",
    role: "Mother of the Bride",
    quote:
      "The candid moments of my daughter’s wedding made me emotional. Thank you, LivYoung, for your magical touch.",
  },
  {
    name: "Siddharth Raghavan",
    role: "Musician",
    quote:
      "They captured the soul of our Carnatic concert without interrupting the flow — incredible attention to detail.",
  },
  {
    name: "Lakshmi Balakrishnan",
    role: "Event Planner",
    quote:
      "LivYoung has an eye for culture and emotion. Every frame tells a story — our clients love her work.",
  },
  {
    name: "Deepa Ravi",
    role: "Pregnancy Shoot Client",
    quote:
      "My maternity shoot was serene and beautiful. LivYoung made me feel comfortable and radiant!",
  },
  {
    name: "Vishnu Suresh",
    role: "Father",
    quote:
      "Our son's naming ceremony was captured perfectly. Every smile, every tear — all preserved with such care.",
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
  const testimonialWelcomePackage = {
    backgroundImage: "https://i.postimg.cc/jS7tW5Yn/IMG-2238.jpg",
    title: "See what our clients say",
    subtitle: "Testimonials",
    showWelcome: true,
  };

  return (
    <>
      <Navbar welcomeConfig={testimonialWelcomePackage} />
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Clients Say</h2>

          {/* New Description Section */}
          <div className="testimonials-description">
            <p>
              At LivYoung Photography, we capture more than just moments — we
              tell your unique story through every frame. Our passion for
              detail, understanding of culture, and commitment to quality
              ensures that your special occasions are immortalized with artistry
              and care. Whether it's a wedding, cultural event, or personal
              milestone, trust LivYoung to deliver timeless memories with warmth
              and professionalism.
            </p>

            <motion.img
              src="https://i.postimg.cc/wMBHqHP1/Beige-Minimalist-Initial-Font-Floral-Agency-Logo-pdf-page-0001.jpg"
              alt="Animated Logo"
              className="animated-logo"
              animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Testimonials Grid */}
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

                {/* Star rating */}
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <div className="testimonial-user">
                  <div>
                    <h4 className="user-name">{testimonial.name}</h4>
                    <p className="user-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Testimonials;
