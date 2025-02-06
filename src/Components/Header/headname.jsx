import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome CSS
import './Style.css'; // Custom Styles
import logo from './log_p.png';

function Headname(){
return(
  
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <div className="navbar-header">
          
          <a className="navbar-brand" href="/">
          
            <img
              alt="Brand Logo"
              src={logo}
              className="img-fluid"
              style={{ maxHeight: '70px' }}
            />
          </a>
          <button
            type="button"
            className="navbar-toggler navbar-toggler-right"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active orange-underline" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active orange-underline" href="index">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active orange-underline" href="index">
                Broucher
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active orange-underline" href="index">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active orange-underline" href="index">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active orange-underline" href="index">
                Enquiry Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);
}

export default Headname;