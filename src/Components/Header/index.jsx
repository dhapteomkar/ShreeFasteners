import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome CSS
import './Style.css'; // Custom Styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS


function Header() {
  return (
    
    <div className="top-bar bg-light pt-2">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="contact-details d-flex align-items-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shreefastenersfittings@gmail.com"
              className="me-4 text-dark contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope me-2 text-orange"></i> shreefastenersfittings@gmail.com
            </a>
            <a href="tel:+916354378574" className="me-4 text-dark contact-item phone">
              <i className="fas fa-phone-alt me-2 text-orange"></i> +91 63543 78574
            </a>
          </div>

          <div className="social-links d-flex align-items-center">
            <a
              href="https://wa.me/916354378574"
              className="text-green social-icon me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
