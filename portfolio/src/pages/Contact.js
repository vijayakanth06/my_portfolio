import React, { useRef } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
const Contact = () => {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8j9zc8s', 
      'template_dhy83d2', 
      form.current, 
      'wsucaNT1hAHlrl1od'
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send the message, please try again.');
      console.error('EmailJS error:', error);
    });
  };
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">CONTACT</h2>
      
      <div className="contact-container">
        <div className="contact-left">
          <h3 className="contact-subheading">Get in Touch</h3>
          <p className="contact-description">
            Have a question or want to work together? Drop me a message!
          </p>
          
          <div className="contact-options">
            <h4 className="options-heading">Contact Options</h4>
            
            <div className="contact-item">
                <FaEnvelope className="contact-icon" />
            <div>
                <span className="option-label">Email</span>
                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vikymahendiran123@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                >
                vikymahendiran123@gmail.com
                </a>
            </div>
            </div>
            
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <div>
                <span className="option-label">WhatsApp</span>
                <a href="https://wa.me/919360177805" className="contact-link">
                  +91 93601 77805
                </a>
              </div>
            </div>
          </div>
          
          <div className="quick-response">
            <h4 className="options-heading">Quick Response</h4>
            <p>
              I typically respond to all messages within 24 hours. For urgent inquiries, 
              WhatsApp is the fastest way to reach me.
            </p>
          </div>
        </div>
        
       <div className="contact-right">
          <form 
            ref={form} 
            className="contact-form" 
            onSubmit={sendEmail}
          >
            {/* Form fields with proper name attributes */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="user_name" // Must match template variable
                placeholder="your name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email" // Must match template variable
                placeholder="you@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" // Must match template variable
                placeholder="Write your message here..." 
                rows="5" 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;