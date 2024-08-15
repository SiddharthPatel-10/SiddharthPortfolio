import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="main_footer">
        {/* Left */}
        <div className="footer_left">
          <h3>SIDDHARTH PATEL</h3>
          <p>
            I'm a full-stack web developer focused on building the frontend of websites and web applications, as well as a React Native mobile developer. I strive to create products that are not only functional but also successful.
          </p>
        </div>
        {/* Right */}
        <div className="footer_right">
          <h3>social</h3>
          <div className="social">
            <a href="https://www.linkedin.com/in/siddharth-patel-b1ba53270/">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://github.com/SiddharthPatel-10">
              <i className="ri-github-fill"></i>
            </a>
            <a href="">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="">
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer_border"></div>

      {/* Subfooter Section */}
      <div className="sub_footer">
        <div className="designedanddevelopedby">
          <p>
            Designed & Developed by{' '}
            <a id="unique" href="mailto:connectwithsiddh@gmail.com">
              Siddharth Patel
            </a>{' '}
            <span role="img" aria-label="heart">
              💙
            </span>
          </p>
          <p>
            Connect with me on LinkedIn:{' '}
            <a
              id="unique"
              href="https://www.linkedin.com/in/siddharth-patel-b1ba53270"
            >
              My LinkedIn Profile
            </a>
          </p>
        </div>
        <div className="copyright">
          <p>&copy; 2023 All Rights Reserved by Siddharth Patel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
