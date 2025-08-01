import Footer from '../footer/footer.js';
import Header from '../Header/header.js';
import './About.css';

function About() {
  return (
    <>
      <Header />
      <div className="about-wrapper">
        <div className="container py-5">
          
          {/* About Us Section */}
          <div className="row align-items-center mb-5">
            {/* Text on Left (Desktop) / Top (Mobile) */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2 className="about-heading">About Us</h2>
              <p className="about-text">
                SkillHub.com is a collaborative platform where people share, exchange, and grow skills together. Whether
                you're building your career, exploring hobbies, or sharing your expertise, SkillHub connects you with the
                right community.
                <br />
                With features like live workshops, mentoring, and webinars, users can create profiles, match with
                like-minded learners, and engage in real-time learning.
                <br />
                To keep things fun and trusted, SkillHub offers badges, leaderboards, and skill verification, helping you
                showcase your abilities and stay motivated.
              </p>
            </div>

            {/* Image on Right (Desktop) / Bottom (Mobile) */}
            <div className="col-12 col-md-6 text-center">
              <img src="assets/AboutUs.jpg" alt="About Us" className="img-fluid img-about1" />
            </div>
          </div>

          {/* Founder Section */}
          <div className="row align-items-center flex-column-reverse flex-md-row">
            {/* Image on Left (Desktop) / Bottom (Mobile) */}
            <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
              <img src="assets/Founder.jpg" alt="Founder" className="img-fluid img-about2" />
            </div>

            {/* Text on Right (Desktop) / Top (Mobile) */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2 className="about-heading">About the Founder</h2>
              <p className="about-text">
                Sumit Kanchole, the founder of SkillHub.com, is a passionate tech enthusiast and lifelong learner dedicated to empowering individuals through skill-based collaboration.
                <br />
                With a strong background in MERN stack development and a deep interest in education and community-building, Sumit envisioned a platform where people could not only learn but also teach and grow together.
                <br />
                His mission is to create a space where everyone — regardless of background — has the opportunity to upgrade their skills, connect with like-minded learners, and thrive in today’s dynamic world.
                <br />
                Through SkillHub.com, Sumit is making learning more interactive, accessible, and community-driven.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
