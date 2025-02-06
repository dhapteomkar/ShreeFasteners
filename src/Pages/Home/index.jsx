import Categories from "../../Components/Categories/categories";
import Footer from "../../Components/Footer/footer";
import Headname from "../../Components/Header/headname";
import Photochange from "../../Components/PhotoChange/photochange";
import VisionMission from "../../Components/VisionMission/visionmission";
import Header from "../../Components/Header";

function Home(){
  return(<div>
    <div>
    <Header/>
      <Headname />
      <Photochange />
      <VisionMission />
      <Categories /> {/* This should now render properly */}
      <Footer />
    </div>
  </div>
  );
}

export default Home;