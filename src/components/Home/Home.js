import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../Header/header';
import './Home.css';

function Home() {
  return <>
    <Header/>
    <div className="home-wrapper">
      <main className="hero-section" style={{backgroundImage:`url("assets/home-page.jpg")`}}>
        <section className="hero-content">
          <h2 className="hero-heading">
            Welcome to SKILLHUB<span className="dot-highlight">.</span><span className="com-text">com</span>
          </h2>
          <p className="hero-subtext">Learn What You Love. Teach What You Know.</p>
          <div className="d-flex justify-content-center gap-3 my-4">
            <button className="hero-button"><Link className='nav-link text-white' to="/connect">Start Learning</Link></button>
          </div>
        </section>
      </main>

      <div className="container d-flex what-section overflow-hidden">
        <div className="col-md-6 mt-3 pt-4 overflow-hidden">
          <h2 >What is SKILLHUB.com ?</h2>
          <p className="info-text ">
            SkillHub.com is a free skill exchange platform where people can teach what they know and learn what they
            need — without paying money. It’s like a marketplace, but instead of trading products or services, you’re
            trading skills.
          </p>
        </div>
        <div>
          <img src="assets/What-skillhub.jpg" className="info-img" alt="What is SkillHub" />
        </div>
      </div>

      <div className="container d-flex why-section">
        <div className="container mt-4 pt-4">
          <img src="assets/why-SkillHub.jpg" className="info-img" alt="Why SkillHub" />
        </div>
        <div className="col-md-6 mt-3 ml-4 pt-4 pl-4">
          <h2>Why SkillHub Exists ?</h2>
          <p className="info-text">
            Many people want to learn new things — coding, music, photography, cooking — but can’t afford courses. At the
            same time, others have skills and want to teach or learn something new themselves. SkillHub connects these two
            sides.
          </p>
        </div>
      </div>

      <div className="container how-section">
        <div className="col-md-6 mt-3 ml-4 pt-4 pl-4">
          <h1>How It Works?</h1>
        </div>
        <div className="container d-flex mt-4 justify-content-center">
            <div className="bg-white m-4 how-card overflow-hidden">
         <img src="assets/How-1.jpg" className='how-img' />
           <p className='how-text'>Register and build your profile.</p>
           </div>

           <div className="bg-white m-4 how-card overflow-hidden">
         <img src="assets/How-2.jpg" className='how-img' />
           <p className='how-text' >List the skill you can teach and the one you want to learn.</p>
           </div>

           <div className="bg-white  m-4 how-card overflow-hidden">
         <img src="assets/How-3.jpg" className='how-img' />
           <p className='how-text' >Find matches — users who want to learn what you teach, and teach what you want to learn.</p>
           </div>

           <div className="bg-white m-4 how-card overflow-hidden" >
         <img src="assets/How-4.jpg" className='how-img' />
           <p className='how-text'>Exchange knowledge through chat, calls, or meetups.</p>
           </div>
        </div>
      </div>

      <div className="container d-flex core-section">
        <div className="mt-3 pt-4">
          <h2>Core Values</h2>
          <p className="core-text" style={{backgroundImage: `url("/assets/coreValue.jpeg")`}}>
            At SkillHub.com, we believe in mutual growth over money, enabling people to share and exchange skills freely.
            Our platform thrives on community-based learning, where everyone has the chance to be both a teacher and a
            learner. To build trust and ensure quality, we offer skill verification, making it easy for users to connect
            with confidence and credibility.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
  </>
}

export default Home;
