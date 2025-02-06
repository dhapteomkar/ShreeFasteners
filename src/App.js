import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./Pages/Home";
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome CSS
import './Components/Header/Style.css'; // Custom Styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HexBolt from "./Components/Categories/Products/Bolts/bolts";
import SocketHead from "./Components/Categories/Products/SocketHead/sockethead";
import Rivets from "./Components/Categories/Products/Rivets/rivets";
import Studs from "./Components/Categories/Products/Studs/studs";

function App() {
  return (
    
    <Router> {/* Router wraps the entire app */}
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/1" element={<HexBolt />} />
      <Route path="/product/6" element={<SocketHead />} />
      <Route path="/product/4" element={<Rivets />} />
      <Route path="/product/5" element={<Studs />} />
    </Routes>
    
  </Router>
  )
}

export default App;
