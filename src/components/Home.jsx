import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div>
      <div className="namae_heading">
        <h1 className="magnet">HEY, I'M SIDDHARTH PATEL</h1>
        <p>
          A Result-Oriented MERN Stack Developer and React Native Mobile
          Developer, building and managing Websites and Mobile Applications that
          drive the success of the overall product.
        </p>

        <button className="magnet button">
          <Link to="/projects">Projects</Link>
        </button>
      </div>
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
