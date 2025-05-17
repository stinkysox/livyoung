import React from "react";
import "./TeasersSection.css";
import { FaYoutube } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const TeasersSection = () => {
  const teasersWelcomePackage = {
    backgroundImage: "https://i.postimg.cc/3R3QLRgc/IMG-1943-1.jpg",
    title: "Explore Our Films",
    subtitle: "Films",
    showWelcome: true,
  };

  const videos = ["https://www.youtube.com/embed/4mBO9gceg4M"];

  return (
    <>
      <Navbar welcomeConfig={teasersWelcomePackage} />
      <div className="teasers-section">
        <h2 className="teasers-h2">Teasers</h2>

        <p className="teasers-description">
          Every couple has a story — raw, beautiful, and uniquely their own. Our
          films are crafted to be more than just memories; they are timeless
          cinematic experiences that stir emotions and bring your most cherished
          moments back to life. With a deep sense of storytelling, artistic
          vision, and emotion, we create wedding teasers that linger in your
          heart long after the day has passed.
        </p>

        {videos.length === 0 ? (
          <p>No videos to show</p>
        ) : (
          <div className="video-grid">
            {videos.map((src, index) => (
              <div className="video-container" key={index}>
                <iframe
                  src={src}
                  title={`Teaser ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        <div className="youtube-icon">
          <a
            href="https://www.youtube.com/@livyoungphotography"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="glow-youtube" />
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TeasersSection;
