import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Projects from "./components/Projects"; // Create these components
import AboutMe from "./components/AboutMe"; // Create these components
import ContactForm from "./components/ContactForm";
import "./components/styles/style.css"; 
import Home from "./components/Home";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { gsap, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
      const scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.8, // Adjust the lerp value for smoother scrolling
      smoothMobile: true, // Enable smooth scrolling on mobile
      inertia: 0.8, // Adjust inertia for smoother experience
      });

      // Shery.js initialization
    // Shery.mouseFollower();
    Shery.makeMagnet(".magnet");

    // GSAP ScrollTrigger animation
    // gsap.to(".featured_left_elem", {
    //   scrollTrigger: {
    //     trigger: "#featuredImages",
    //     pin: true,
    //     start: "top top",
    //     end: "bottom bottom",
    //     endTrigger: ".last",
    //     scrub: 1,
    //   },
    //   y: "-300%",
    //   ease: Power1,
    // });

    // Menu toggle
    // const menuIcon = document.querySelector(".menu");
    // const menuItems = document.querySelectorAll(".menu_non");

    // menuIcon.addEventListener("click", () => {
    //   menuItems.forEach(item => {
    //     item.classList.toggle("show");
    //   });
    // });

    // Contact form submit alert
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent successfully!');
      });
    }

      return () => {
          if (scroll) scroll.destroy();
      };
  }, []);
  return (
    <div id="main" ref={scrollRef} className="scroll-container" data-scroll-container>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;
