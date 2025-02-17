// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles.css"; // Import CSS

const Home = () => {
//   const navigate = useNavigate();

  return (
    <div className="home-container">
        <Navbar/>
      <h2>Welcome to Our E-Commerce Store</h2>
      
    </div>
  );
};

export default Home;
