import React, { memo, useRef } from 'react';
import '../styles/Contact.css';
import { useRevealSection } from '../hooks/useScrollReveal';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const ref = useRevealSection();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8j9zc8s', 'template_dhy83d2', form.current, 'wsucaNT1hAHlrl1od')
      .then(() => { alert('Message sent successfully!'); form.current.reset(); })
      .catch((err) => { alert('Failed to send. Please try again.'); console.error(err); });
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <p className="terminal-label reveal">CONTACT</p>
      <h2 className="section-title reveal reveal-delay-1">Get in Touch</h2>

      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-subtitle reveal reveal-delay-2">Let's Work Together</h3>
          <p className="contact-desc reveal reveal-delay-3">
            Have a question or want to collaborate? Drop me a message!
          </p>

          <div className="contact-options reveal reveal-delay-4">
            <p className="contact-options-title">Contact Options</p>

            <div className="contact-card">
              <div className="contact-card-icon"><FaEnvelope /></div>
              <div>
                <span className="contact-card-label">Email</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vikymahendiran123@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card-value">
                  vikymahendiran123@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon"><FaWhatsapp /></div>
              <div>
                <span className="contact-card-label">WhatsApp</span>
                <a href="https://wa.me/919360177805" className="contact-card-value">+91 93601 77805</a>
              </div>
            </div>
          </div>

          <p className="quick-note reveal reveal-delay-5">
            I typically respond within 24 hours. For urgent inquiries, WhatsApp is fastest.
          </p>
        </div>

        <div className="contact-form-card reveal reveal-delay-3">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-field">
              <label htmlFor="c-name">Your Name</label>
              <input type="text" id="c-name" name="user_name" placeholder="your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="c-email">Your Email</label>
              <input type="email" id="c-email" name="user_email" placeholder="you@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="c-message">Your Message</label>
              <textarea id="c-message" name="message" placeholder="Write your message here..." rows="5" required />
            </div>
            <button type="submit" className="submit-btn">
              Send Message <span className="submit-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);