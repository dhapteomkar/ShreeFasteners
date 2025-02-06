import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import Link from React Router
import Card from './card';
import CardContent from './cardcontent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bolt from '../../assets/images/Category/BoltCategory.png';
import Nut from '../../assets/images/Category/NutCategory.png';
import Insert from '../../assets/images/Category/InsertNutCategory.png';
import Rivet from '../../assets/images/Category/RivetCategory.png';
import Studs from '../../assets/images/Category/StudsCategory.png';
import Socket from '../../assets/images/Category/SocketHeadScrewCategory.png';
import Machine from '../../assets/images/Category/MachineScrewCategory.png';
import Selftap from '../../assets/images/Category/SelfTappingScrewCategory.png';
import Selfdrill from '../../assets/images/Category/SelfDrillingScrewCategory.png';
import Anchor from '../../assets/images/Category/AnchorCategory.png';
import Washer from '../../assets/images/Category/WasherCategory.png';
import Flange from '../../assets/images/Category/Flange.png';
import Pipe from '../../assets/images/Category/Pipe.png';
import Dairy from '../../assets/images/Category/Dairy.png';
import Valve from '../../assets/images/Category/Valve.png';
import Other from '../../assets/images/Category/OtherCategory.png';
import './Style.css';
import Sponser from "../../assets/images/Sponser.png";
const productsData = {
  Fasteners: [
    { id: 1, name: 'Bolts', description: 'Strong, threaded fasteners', image: Bolt },
    { id: 2, name: 'Nuts', description: 'Pair with bolts', image: Nut },
    { id: 3, name: 'Insert Nuts', description: 'Internal threading insert', image: Insert },
    { id: 4, name: 'Rivets', description: 'Permanent fastening solution', image: Rivet },
    { id: 5, name: 'Studs', description: ' Threaded attachment rods', image: Studs },
    { id: 6, name: 'Socket Head Screws', description: 'Screws with internal drive', image: Socket },
    { id: 7, name: 'Machine Screws', description: 'Screws for machinery', image: Machine },
    { id: 8, name: 'Self Tapping Screws', description: 'Screws that cut threads', image: Selftap },
    { id: 9, name: 'Self Drilling Screws', description: 'Screws that drill and tap', image: Selfdrill },
    { id: 10, name: 'Anchor Fasteners', description: 'Fasteners for masonry', image: Anchor },
    { id: 11, name: 'Washer', description: 'Load-distributing discs', image: Washer },
    { id: 12, name: 'Other Products', description: 'Miscellaneous fasteners', image: Other },
  ],
  Fittings: [
    { id: 13, name: 'Pipe Fittings', description: 'Connects pipes securely', image: Pipe },
    { id: 15, name: 'Flange Fittings', description: 'Pipe connectors with flanges', image: Flange },
    { id: 14, name: 'Dairy Fittings', description: 'Specialized fittings for dairy', image: Dairy },
    { id: 16, name: 'Valves', description: 'Controls fluid flow', image: Valve },
  ],
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fasteners');

  return (
    <div className="container  new">
      <h1 className="text-center mb-5">Our Product Range</h1>
      <div className="row mb-4">
        <div className="col text-center">
          {Object.keys(productsData).map((category) => (
            <button
              key={category}
              className={`btn mx-2 ${
                selectedCategory === category ? "btn-orange" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="row product-row mx-0 px-3">
  {productsData[selectedCategory].map((product) => (
    <motion.div
    key={product.id}
    className="product-col col-lg-3 col-md-4 col-sm-6 col-6  newer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={`/product/${product.id}`}>
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
<div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '150px'}}>
  <p style={{ marginBottom: '10px',
    fontSize: '22px',   // Slightly larger font size
    fontWeight: 'bold', // Make it bold
    color: 'black',   // Beautiful green color
    textTransform: 'uppercase', // Uppercase text for emphasis
    letterSpacing: '2px',  // Add some spacing between letters
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',  // Elegant font
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow effect
    marginTop: '20px', // Adds extra margin above the text
    transition: 'transform 0.3s ease-in-out',  }}>Distributors of</p>
  <img src={Sponser} style={{ maxHeight: '117px', width: 'auto', maxWidth: '100%', marginTop: '10px' }} />
</div>

    </div>
  );
};

export default Categories;
