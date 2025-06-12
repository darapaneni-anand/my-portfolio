import React from 'react';
import './Contact.css';

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9036ae40-89e6-4a75-8a1a-749d31e6fa40");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>If you have any questions or want to get in touch, feel free to reach out!</p>
          <p>You can reach me via email or phone:</p>
          <p>
            <span className="icon email-icon" aria-hidden="true">
              {/* Email SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            Email: <a href="mailto:your.email@example.com">anandteja38@gmail.com</a>
          </p>
          <p>
            <span className="icon phone-icon" aria-hidden="true">
              {/* Phone SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.48 2.4 1.05 3.49a2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c1.09.57 2.28.92 3.49 1.05a2 2 0 0 1 1.72 2z"></path>
              </svg>
            </span>
            Phone: <a href="tel:+1234567890">+91 7075863028</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter the message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
