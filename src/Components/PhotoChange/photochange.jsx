import React from "react";


function Photochange(){
  return(
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className=""
          aria-label="Slide 1"
          key={0}
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          className="active"
          aria-current="true"
          aria-label="Slide 2"
          key={1}
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          className=""
          aria-label="Slide 3"
          key={2}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src="https://i0.wp.com/www.theengineeringchoice.com/wp-content/uploads/2024/06/Nuts-and-Bolts.webp"
            className="d-block w-100 img-fluid"
            alt="Slide 1"
            height="500"
            style={{ height: '610px', objectFit: 'cover' }}
          />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <img
            src="https://www.shutterstock.com/image-photo/stainless-steel-fasteners-nuts-bolts-600nw-2225435699.jpg"
            className="d-block w-100 img-fluid"
            alt="Slide 2"
            height="500"
            style={{ height: '610px', objectFit: 'cover' }}
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline. 123</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://previews.123rf.com/images/macrovector/macrovector1812/macrovector181200231/127138872-decorative-frame-from-realistic-metal-fasteners-screws-bolts-nuts-and-nails-on-gray-white-background.jpg"
            className="d-block w-100 img-fluid"
            alt="Slide 3"
            height="500"
            style={{ height: '610px', objectFit: 'cover' }}
          />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
}

export default Photochange;