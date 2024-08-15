// Heading.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeadingSection = () => {
  return (
    <div className="namae_heading">
      <h1 className="magnet">HEY, I'M SIDDHAR PATEL</h1>
      <p>
        A Result-Oriented Web Developer building and managing Websites and
        Web Applications that lead to the success of the overall product.
      </p>
      <button className="magnet button">
        <Link to="/projects">Projects</Link>
      </button>
    </div>
  );
};

export default HeadingSection;
