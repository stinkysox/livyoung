import React from "react";
import CountUp from "react-countup";
import "./Stats.css";

const stats = [
  {
    value: 45,
    label: "Stories captured. Love, laughter, and a few happy tears included.",
  },
  {
    value: 7,
    label:
      "Talented humans. Photographers, filmmakers, storytellers, and creative masterminds.",
  },
  {
    value: 2,
    label:
      "Countries, countless love stories, timeless memories captured worldwide.",
  },
  {
    value: 50,
    label: "Happy Clients", // Optionally remove this entry if it's not needed
  },
];

const Stats = () => {
  return (
    <section className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <h2>
            <CountUp end={stat.value} duration={2} />+
          </h2>
          <hr />
          {stat.label && <p>{stat.label}</p>}
        </div>
      ))}
    </section>
  );
};

export default Stats;
