import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  // Define images directly in the component
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/BbDWQ6pQ/IMG-2279.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/VNTHrwdS/IMG-2106.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/rsg14GQh/424A6781.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/mDyCxNfb/IMG-0981.jpg",
        category: "Right Images",
      },
      {
        imageUrl: "https://i.postimg.cc/5tMXxYmj/IMG-0982.jpgg",
        category: "Right Images",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/PqLSk72d/IMG-2052-2.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/7PQb5QNF/IMG-1244.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/Yq593GZ8/IMG-1248.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/SsPqxHpV/IMG-1943.jpg",
        category: "Left Images",
      },
      {
        imageUrl: "https://i.postimg.cc/sDRq43K7/IMG-2277.jpg",
        category: "Left Images",
      },
    ],
  };

  const rightArrowImages = categories["Right Images"];
  const leftArrowImages = categories["Left Images"];

  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  const renderImages = (imageArray, direction) => {
    return imageArray.length > 0
      ? imageArray.map((image, idx) => (
          <img
            key={`${direction}-${idx}`}
            className="marquee-img"
            src={image.imageUrl}
            alt={`${direction === "right" ? "Right" : "Left"} Slide ${idx + 1}`}
          />
        ))
      : generateEmptyImages();
  };

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightArrowImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftArrowImages, "left")}
        </Marquee>
      </div>

      <div className="instagram-button-container">
        <a
          href="https://www.instagram.com/livyoungphotography/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-button"
        >
          FOLLOW LIVYOUNG ON INSTAGRAM
        </a>
      </div>
    </div>
  );
};

export default MarqueeImages;
