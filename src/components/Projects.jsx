import React from 'react';

const Projects = () => {
  return (
    <div className="page3">
      <div className="page3_topdiv">
        <h1>PROJECTS</h1>
        <div className="border_bottom"></div>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      {/* Project 1 */}
      <div className="page3_second_div">
        <img className="webcraft" src="Images/studyNotion.png" alt="StudyNotion" />
        <div className="project">
          <h2 className="project_title">StudyNotion</h2>
          <p className="project_desc">
      StudyNotion is an ed-tech platform I developed that offers a variety of courses to help students and professionals enhance their skills. Instructors can create and sell their own courses, providing a rich and diverse learning experience. With features like progress tracking, course management, and secure payments, StudyNotion provides a seamless learning experience for users worldwide.
    </p>
          <button className="button magnet">
            <a href="https://StudyNotion-three.vercel.app/">Case Study</a>
          </button>
        </div>
      </div>

      {/* Project 2 */}
      <div className="page3_second_div">
        <img className="webcraft" src="Images/ecozon.jpg" alt="Ecozon" />
        <div className="project">
          <h2 className="project_title">Ecozon</h2>
          <p className="project_desc">
  I developed an Amazon clone using ReactJS, focusing on the frontend. It features adding/removing items from the cart, calculating totals, and integrating Stripe for payments. This project highlights my ability to create user-friendly interfaces and secure payment systems.
</p>
          <button className="button magnet">
            <a href="https://siddharthpatel-10.github.io/ecozon/">Case Study</a>
          </button>
        </div>
      </div>

      {/* Project 3 */}
      <div className="page3_second_div">
        <img className="webcraft" src="/Images/webcraft.png" alt="WebCraft" />
        <div className="project">
          <h2 className="project_title">WebCraft</h2>
          <p className="project_desc">
  WebCraft is a website I created for my client based on her requirements. It features an amazing user interface that is fully responsive, ensuring a great experience across all devices. This project showcases my ability to deliver tailored solutions that meet client needs.
</p>
          <button className="button magnet">
            <a href="https://siddharthpatel-10.github.io/WebCraft/">Case Study</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
