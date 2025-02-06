import React ,{ useEffect } from "react";
import Header from "../../../Header";
import Headname from "../../../Header/headname";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router
import Card from "./card";
import CardContent from "./cardcontent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style3.css";
import BulbTite from "../../../../assets/images/Rivets/BulbTiteRivet.png";
import ClosedEnd from "../../../../assets/images/Rivets/ClosedEndRivet.png";
import ColorRivet from "../../../../assets/images/Rivets/ColorRivet.png";
import MonoBolt from "../../../../assets/images/Rivets/MonoBoltRivet.png";
import MultiGrip from "../../../../assets/images/Rivets/MultiGripRivet.png";
import OpenEnd from "../../../../assets/images/Rivets/OpenEndRivet.png";

  
import Footer from "../../../Footer/footer";
import Subcategories from "../../subcategories";


const productsData = {
  Fasteners: [
    { id: 1, name: "Bulb Tite Rivet", description: "", image: BulbTite },
    { id: 2, name: "Closed End Rivet", description: "", image: ClosedEnd },
    { id: 3, name: "Open End Rivet", description: "", image: OpenEnd },
    { id: 4, name: "Mono Bolt Rivet", description: "", image: MonoBolt },
    { id: 5, name: "Multi Grip Rivet", description: "", image: MultiGrip},
    { id: 6, name: "Color Rivet", description: "", image: ColorRivet },
    
  ],
};


const Rivets = () => {
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
          <h1 class="heades">Types of Rivets</h1>
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

export default Rivets;
