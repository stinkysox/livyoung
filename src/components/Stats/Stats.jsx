import React from "react";
import CountUp from "react-countup";
import "./Stats.css"; // Create this for styling

const stats = [
  {
    value: 45,
    label: "Stories Captured. Love, laughter, and a few happy tears included.",
  },
  {
    value: 7,
    label:
      "Talented humans. Photographers, filmmakers, storytellers, and creative masterminds.",
  },
  {
    value: 2,
    label:
      "countries, countless love stories, timeless memories captured worldwide.",
  },
  {
    value: 7,
    label: "",
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
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
