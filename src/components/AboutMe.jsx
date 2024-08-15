import React from 'react';

const AboutMe = () => {
  return (
    <div className="page2">
      <div className="page2_topdiv">
        <h1>ABOUT ME</h1>
        <div className="border_bottom"></div>
        <p>
          Learn more about me, what I do, and my skills in programming and technology.
        </p>
      </div>

      <div className="page2_second_div">
        <div className="getto_knowme">
          <h2>Get to know me!</h2>
          <p>
            I'm a MERN Stack Developer and React Native Mobile Developer who loves building and managing websites and mobile apps. You can see some of my work in the Projects section.
          </p>
          <p>
            I enjoy sharing what I've learned in web development to help others in the developer community. Connect or follow me on LinkedIn and Instagram for useful content on web development and programming.
          </p>
          <p>
            I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, please contact me.
          </p>
          <button className="button magnet"><a href="#">Contact</a></button>
        </div>
        <div className="myskills">
          <h2>My Skills</h2>
          <div className="myskills_div">
            <div className="div">HTML</div>
            <div className="div">CSS</div>
            <div className="div">Tailwind CSS</div>
            <div className="div">JavaScript</div>
            <div className="div">ReactJS</div>
            <div className="div">Node.js</div>
            <div className="div">Express.js</div>
            <div className="div">MongoDB</div>
            <div className="div">React Native</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
