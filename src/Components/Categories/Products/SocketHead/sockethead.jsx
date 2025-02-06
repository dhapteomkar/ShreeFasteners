import React ,{ useEffect } from "react";
import Header from "../../../Header";
import Headname from "../../../Header/headname";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router
import Card from "./card";
import CardContent from "./cardcontent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style2.css";
import AllenCap from "../../../../assets/images/SocketHeadScrew/AllenCap.png";
import AllenCsk from "../../../../assets/images/SocketHeadScrew/AllenCsk.png";
import BallGrub from "../../../../assets/images/SocketHeadScrew/BallGrubScrew.png";
import ButtonHead from "../../../../assets/images/SocketHeadScrew/ButtonHead.png";
import GrubScrew from "../../../../assets/images/SocketHeadScrew/GrubScrew.png";
import PointGrab from "../../../../assets/images/SocketHeadScrew/PointGrabScrew.png";



import Footer from "../../../Footer/footer";
import Subcategories from "../../subcategories";


const productsData = {
  Fasteners: [
    { id: 1, name: "Allen Cap", description: "", image: AllenCap },
    { id: 2, name: "Allen Csk", description: "", image: AllenCsk },
    { id: 3, name: "Ball Grub Screw", description: "", image: BallGrub },
    { id: 4, name: "Button Head", description: "", image: ButtonHead },
    { id: 5, name: "Grub Screw", description: "", image: GrubScrew},
    { id: 6, name: "Point Grub Screw", description: "", image: PointGrab },
    
  ],
};


const SocketHead = () => {
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
          <h1 class="heades">Types of Socket Head Screws</h1>
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

export default SocketHead;
