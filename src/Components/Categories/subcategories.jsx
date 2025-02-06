import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style1.css";

function Subcategories() {
  return (
    <div className="mobilenot">
      <div className="custom-header-container" id="navbarNav">
        <ul className="custom-navbar">
          <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/1">
              Bolts
            </a>
          </li>
          <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/2">
              Nuts
            </a>
          </li>
          <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/3">Insert Nuts</a>
          </li>
          <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/4">
              Rivets
            </a>
          </li>
          <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/5">
              Studs
            </a>
          </li>
          <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/6">
            SocketHead Screw
            </a>
          </li> <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/7">
            Machine Screws
            </a>
          </li> <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/8">
            Self Tapping
            </a>
          </li> <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/9">
              Self Drilling
            </a>
          </li> <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/10">
             Anchor Fasteners
            </a>
          </li> <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/11">
            Washers
            </a>
          </li> <li className="custom-nav-item">
            <a className="custom-nav-link" href="/product/12">
             Other Products
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Subcategories;
