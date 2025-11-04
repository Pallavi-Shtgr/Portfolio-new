import React, { useState } from 'react';
import { IoSendOutline } from 'react-icons/io5';

interface FormData {
  fullname: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ fullname: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid = formData.fullname.trim() && formData.email.trim() && formData.message.trim();

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.54651120683!2d74.74215!3d13.34116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb68c6b8b0e7%3A0x3b8b8b8b8b8b8b8b!2sUdupi%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="400"
            height="300"
            loading="lazy"
            title="Udupi, Karnataka, India"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid || isSubmitting}
          >
            <IoSendOutline />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;