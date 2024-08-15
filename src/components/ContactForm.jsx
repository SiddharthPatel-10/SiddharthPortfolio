import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
    to_name: 'Siddharth', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dd4dl39', 'template_jyrk2lh', e.target, 'ADRg1GKywarNBp5NW')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again');
      });

    setFormData({ from_name: '', from_email: '', message: '', to_name: 'Siddharth' }); 
  };

  return (
    <div className="page4">
      <h1>Contact Form</h1>
      <div className="border_bottom"></div>
      <p>
        Here you will find more information about me, what I do, and my
        current skills mostly in terms of programming and technology.
      </p>
      <div className="contact-container">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="from_email">Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Enter your Email"
              required
            />
          </div>
        
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="button magnet"><a href="">Send Message</a></button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
