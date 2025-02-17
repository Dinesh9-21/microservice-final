import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Chocolate from "./pages/Chocolates";
import Grocery from "./pages/Grocery";
import Electronics from "./pages/Electronics";
import Beauty from "./pages/Beauty";

// Funcional Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/chocolates" element={<Chocolate/>} />
        <Route path="/grocery" element={<Grocery/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/beauty" element={<Beauty/>}/>
      </Routes>
    </Router>
  );
};

export default App;
