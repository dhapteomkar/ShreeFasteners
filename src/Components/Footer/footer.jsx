import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importing Bootstrap JS
import './Style.css'
import logo from './log_p.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import MapIcon from '@mui/icons-material/Map';
function Footer() {
  return (
  <footer className="footer bg-black text-light">
  <div className="container py-5 pb-0 me-5">
    <div className="row">
      {/* Left Section: Logo and Description */}
      <div className="col-lg-3 col-sm-12 mb-4 me-5">
        <img
          src={logo}
          alt="Footer Logo"
          className="img-fluid mb-3"
          style={{ width: "70%" }}
        />
        <p className="small text-light" >
        Comprehensive Range of Fasteners and Fittings Under One Roof.
        Your Trusted Partner for Precision Fasteners and Fittings.
        Strength, Durability, and Quality You Can Rely On.

        </p>
        <h5 className="mt-4 ml-4 text-uppercase">BHOSARI, PUNE</h5>
        <ul className="list-unstyled">
          <li>
            <a href="tel:+916354378574" className="text-light small">
              +91 63543 78574
            </a>
          </li>
          
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreefastenersfittings@gmail.com" className="text-light small">
              shreefastenersfittings@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Center Section: Links */}
      <div className="col-lg-2  col-sm-6 mb-4 ms-5">
        <h5 className="text-uppercase mb-3">Fasteners</h5>
        <ul className="list-unstyled small">
          <li><a href="/product/1" className="text-light">Bolts</a></li>
          <li><a href="pins" className="text-light">Nuts</a></li>
          <li><a href="wrenches" className="text-light">Insert Nuts</a></li>
          <li><a href="/product/4" className="text-light">Rivets</a></li>
          <li><a href="/product/5" className="text-light">Studs</a></li>
          <li><a href="/product/6" className="text-light">Socket Head Screws</a></li>
          <li><a href="washers" className="text-light">Machine Screws</a></li>
          <li><a href="structural-assemblies" className="text-light">Self Tapping Screws</a></li>
          <li><a href="stainless-steel-fasteners" className="text-light">Self Drilling Screws</a></li>
          <li><a href="petrochemical-studbolts" className="text-light">Anchor Fasteners</a></li>
          <li><a href="petrochemical-studbolts" className="text-light">Washer</a></li>
          <li><a href="specials" className="text-light">Other Products</a></li>
        </ul>
      </div>
      <div className="col-lg-2  col-sm-6 mb-4">
        <h5 className="text-uppercase mb-3">Fittings</h5>
        <ul className="list-unstyled small">
          <li><a href="socket-screws" className="text-light">Pipe Fittings</a></li>
          <li><a href="pins" className="text-light">Flange Fittings</a></li>
          <li><a href="wrenches" className="text-light">Dairy Fittings</a></li>
          <li><a href="durlok" className="text-light">Valves</a></li>
        </ul>
      </div>
      {/* Reach Us Section */}
      <div className="col-lg-4  col-sm-12">
        <h5 className="text-uppercase mb-3">Reach Us</h5>
        <ul className="list-unstyled small">
          <li>
            <i className="fa fa-envelope"></i>{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreefastenersfittings@gmail.com" className="text-light">
              shreefastenersfittings@gmiail.com
            </a>
          </li>
          <li>
            <i className="fa fa-phone"></i> +91 63543 78574
          </li>
          <li>
            <i className="fa fa-home"></i>Shree Fasteners and Fittings <br/> Plot No. 111/1 S Block, 
            Indrayani CHowk, MIDC,<br/> Bhosari, Pune- 411026
          </li>
        </ul>
        <div className="social-links mt-3">
          <a
            href="https://www.facebook.com/share/1DChGEPhsi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <FacebookIcon/>
          </a>
          <a
            href="https://www.instagram.com/shree_fasteners_fittings/profilecard/?igsh=MW9vbnd5N25mOWp1cw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <InstagramIcon/>
          </a>
          <a
            href="https://wa.me/message/7OSGPU3MYGLKB1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
           <WhatsAppIcon/>
          </a>
          <a
            href="https://g.co/kgs/FyZ587c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <GoogleIcon/></a>
            <a
            href="https://maps.app.goo.gl/bDEMMwcEcviLcknq8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <MapIcon/>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom text-center py-3">
    <p className="small mb-0 ligh">
      &copy; {new Date().getFullYear()} OmkarDhapte All Rights Reserved.
    </p>
  </div>
</footer>

);


}

export default Footer;


