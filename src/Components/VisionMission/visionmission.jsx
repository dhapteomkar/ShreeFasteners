import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importing Bootstrap JS
import './Style.css'

function VisionMission() {
  return (
  <section className="info-section">
    <div className="container">
      <div className="row">
        {/* Service Box 1 */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="service-box">
            <div className="service-content">
              
              <div>
                <h4>Our Vision and Mission</h4>
                <p>Shree Fasteners and Fittings continues to stand for excellence and integrity, To provide our customers with customized to meet their unique needs, and delivered punctually</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Box 2 */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="service-box">
            <div className="service-content">
              
              <div>
                <h4>Quality Policy</h4>
                <p>Our goal is to be the most trusted and prefeered international supplier of a wide range of Steel fasteners and their components, Quality is our unwavering commitment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Box 3 */}
        <div className="col-12 col-md-4">
          <div className="service-box">
            <div className="service-content">
              
              <div>
                <h4>Core Value</h4>
                <p>Acting with honesty and transperency in all our buisness practices, Committed to delivering exceptional service and support to our customers, Delivering on our promises</p>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End Row */}
    </div> {/* End Container */}
  </section>
);


}

export default VisionMission;


