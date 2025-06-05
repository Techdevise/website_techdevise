// Services.js
import React from 'react';
import '../styles/components/Services.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h2>Services</h2>
        <p>
          Secure, optimize, and manage your IT with expert solutions in
          cybersecurity, cloud, networking, and digital transformation.
        </p>
        <div className="services-list">
          <h3>Website Development →</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>SEO</li>
            <li>Digital Marketing</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
      </div>
      <div className="additional-services">
        <h3>More Services</h3>
        <ul>
          <li>E-commerce Website</li>
          <li>Custom Website Development</li>
          <li>CMS Development</li>
          <li>Website Maintenance & Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;