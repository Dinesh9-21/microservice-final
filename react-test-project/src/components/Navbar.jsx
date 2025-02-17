import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "../styles.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get("http://localhost:3000/logout", { withCredentials: true });
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/home")}>
       
      </div>
      <ul className="nav-links">
        <li> <Link to="/chocolates">Chocolates </Link></li>
        <li ><Link to="/electronics">Electronics</Link></li>
        <li ><Link to="/grocery">Grocery</Link></li>
        <li ><Link to="/beauty">Beauty</Link></li>
      </ul>
      <div className="nav-search">
        <input type="text" placeholder="Search for products..." />
       
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
