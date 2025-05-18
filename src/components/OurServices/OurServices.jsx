import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./OurServices.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const services = [
  {
    title: "Wedding Photography",
    image:
      "https://i.pinimg.com/736x/f7/59/1e/f7591ef2ba6eb343b1c2e5ae97c95fb9.jpg",
  },
  {
    title: "Pre-wedding Photography",
    image:
      "https://i.pinimg.com/736x/9e/91/eb/9e91eb85f896212dccaf39f0682c985c.jpg",
  },
  {
    title: "Fashion Photography",
    image:
      "https://i.pinimg.com/736x/95/f4/58/95f458e35e3e14f3a3680c524b129165.jpg",
  },
  {
    title: "Baby Shoot",
    image:
      "https://i.pinimg.com/736x/85/b1/3c/85b13cdef3b70de0cea616861788f9d9.jpg",
  },
  {
    title: "Maternity Shoot",
    image:
      "https://i.pinimg.com/736x/85/f1/8c/85f18c46a568927c85024bf31b9079ba.jpg",
  },
  {
    title: "Birthday Shoot",
    image:
      "https://i.pinimg.com/736x/6e/fc/ae/6efcaed9f34537dc213531a949703975.jpg",
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const outServiceswelcome = {
    backgroundImage: "https://i.postimg.cc/3NpLHPD6/IMG-2138.jpg",
    title: "Our Services",
    subtitle: "",
    showWelcome: true,
  };

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <>
      <Navbar welcomeConfig={outServiceswelcome} />
      <div className="our-services" id="services">
        <h2 className="main-heading">
          Where every <span>picture</span> <br /> tells a story
        </h2>
        <p className="services-description">
          Livyoung Photography is versatile and dedicated to capturing every
          kind of event—be it weddings, baby showers, birthdays, or fashion
          shoots—with unmatched professionalism and creative flair.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.title}
                onClick={() => navigate("/gallery")}
                className={zoomedIndex === index ? "zoomed" : ""}
              />
              <p>{service.title}</p>
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
      </div>
    </>
  );
};

export default OurServices;
