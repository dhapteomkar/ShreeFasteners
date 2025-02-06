import React ,{ useEffect } from "react";
import Header from "../../../Header";
import Headname from "../../../Header/headname";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router
import Card from "./card";
import CardContent from "./cardcontent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style3.css";
import Clamping from "../../../../assets/images/Studs/ClampingStud.png";
import Clinch from "../../../../assets/images/Studs/ClinchStud.png";
import FullThread from "../../../../assets/images/Studs/FullThreadStud.png";
import Weld from "../../../../assets/images/Studs/WeldStud.png";

import Footer from "../../../Footer/footer";
import Subcategories from "../../subcategories";


const productsData = {
  Fasteners: [
    { id: 1, name: "Clamping Studs", description: "", image: Clamping },
    { id: 2, name: "Clinch Studs", description: "", image: Clinch },
    { id: 3, name: "Full Thread Studs", description: "", image: FullThread },
    { id: 4, name: "Weld Studs", description: "", image: Weld },
  
  ],
};


const Studs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component loads
  }, []);
  return (
    <div>
      <Header />
      <Headname />
      <Subcategories/>
      <div className="container py-5 px-5 new">
     
        {/* <h1 className="text-center mb-5 head">Types of Bolts</h1> */}
        <div >
          <h1 class="heades">Types of Studs</h1>
        </div>
        <div className="row product-row mx-0">
          {productsData.Fasteners.map((product) => (
            <motion.div
              key={product.id}
              className="product-col col-lg-3 col-md-4 col-sm-6 col-6 newer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={`/product${product.id}`}>
                <Card className="product-card shadow">
                  <CardContent>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image mb-3"
                    />
                    <h5 className="product-name">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h5>
                    <p className="product-description">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer/>
      
    </div>
  );
};

export default Studs;
