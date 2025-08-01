import Footer from '../footer/footer';
import Header from '../Header/header';
import './contact.css';

function ContactUs() {
    return <>
      <Header />
      <main className='main-container'>

    <div className="contact-section container my-5  p-4  shadow">
      <div className="row align-items-center p-4">
        
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img src="assets/contact-us.jpg" alt="Contact" className="img-fluid rounded contact-img" />
          <div className="mt-4">
            <p className=''><i className="bi bi-envelope-fill me-2 icon-br"></i><strong>Email:</strong><a href='#' className='text-decoration-none'>  SkillHub@gmail.com</a></p>
            <p className=''><i className="bi bi-telephone-fill me-2 icon-br"></i><strong>Phone:</strong><a href='#' className='text-decoration-none'>  (02532) 8324 9231</a></p>
          </div>
        </div>

        <div className="col-md-6">
          <p className="text-color fw-semibold">Get in touch</p>
          <h1 className="fw-bold">Let's Chat, Reach Out to Us</h1>
          <p className="text-muted text-desc">Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.</p>
          
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last Name" required />
              </div>
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>

            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="privacyCheck" required />
              <label className="form-check-label" htmlFor="privacyCheck">
                I agree to our friendly privacy policy
              </label>
            </div>

            <button type="submit" className="btn btn-bg-color px-4">Send Message</button>
          </form>
        </div>
      </div>
      </div>
      </main>
      <Footer/>
  </>

};

export default ContactUs;
