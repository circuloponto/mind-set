import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will respond shortly.');
  };

  return (
    <div className="contact-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with the BRIDGE project team</p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-form-title">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 id="contact-form-title" className="section-heading">Get in Touch</h2>
              <p>Have questions about the BRIDGE project? We'd love to hear from you.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email</strong>
                  <a href="mailto:info@bridge-project.eu">info@bridge-project.eu</a>
                </div>
                <div className="contact-item">
                  <strong>Project Coordinator</strong>
                  <p>Partner Organisation 1, Portugal</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
