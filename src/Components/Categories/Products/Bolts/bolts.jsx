// ProductPage1.js
import React ,{ useEffect } from "react";
import Header from "../../../Header";
import Headname from "../../../Header/headname";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router
import Card from "./card";
import CardContent from "./cardcontent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Hex from "../../../../assets/images/Bolt/HexBolt.png";
import HalfThread from "../../../../assets/images/Bolt/HalfThreadBolt.png";
import Slotted from "../../../../assets/images/Bolt/SlottedBolt.png";
import Flange from "../../../../assets/images/Bolt/FlangeBolt.png";
import Carraige from "../../../../assets/images/Bolt/CarriageBolt.png";
import Eye from "../../../../assets/images/Bolt/EyeBolt.png";
import Dome from "../../../../assets/images/Bolt/DomeBolt.png";
import Wing from "../../../../assets/images/Bolt/WingBolt.png";
import Anti from "../../../../assets/images/Bolt/AntiTheftBolt.png";
import Tee from "../../../../assets/images/Bolt/TeeBolt.png";
import JBolt from "../../../../assets/images/Bolt/JBolt.png";
import UBolt from "../../../../assets/images/Bolt/UBolt.png";
import Footer from "../../../Footer/footer";
import Subcategories from "../../subcategories";

const productsData = {
  Fasteners: [
    { id: 1, name: "Hex Bolt", description: "", image: Hex },
    { id: 2, name: "Hex Half Thread Bolt", description: "", image: HalfThread },
    { id: 3, name: "Hex Slotted Bolt", description: "", image: Slotted },
    { id: 4, name: "Flange Bolt", description: "", image: Flange },
    { id: 5, name: "Carraige Bolt", description: "", image: Carraige },
    { id: 6, name: "Eye Bolt", description: "", image: Eye },
    { id: 7, name: "Dome Bolt", description: "", image: Dome },
    { id: 8, name: "Wing Bolt", description: "", image: Wing },
    { id: 9, name: "Anti-Theaft Bolt", description: "", image: Anti },
    { id: 10, name: "Tee Bolt", description: "", image: Tee },
    { id: 11, name: "J Bolt", description: "", image: JBolt },
    { id: 12, name: "U Bolt", description: "", image: UBolt },
  ],
};

const HexBolt = () => {
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
          <h1 class="heades">Types of Bolts</h1>
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

export default HexBolt;
