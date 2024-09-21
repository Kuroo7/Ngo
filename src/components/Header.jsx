import { Link } from "react-router-dom";
import logo from "../assets/logo.png" 

const Header = () => {
  return (
    <nav className="flex sticky bg-white top-0 text-xl items-center h-20 shadow-lg justify-between px-5">
      <div>
        <img className="h-28" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-10">
          <li>
            <Link to="/" className="hover:text-blue-700">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-700">About Us</Link>
          </li>
          <li>
            <Link to="/missionandvision" className="hover:text-blue-700">Mission and Vision</Link>
          </li>
        </ul>
      </div>
      {/* Uncomment this block if you want to add the Donate Now button */}
      {/* 
      <div>
        <button className="bg-blue-700 h-12 px-5 rounded-md text-white">Donate Now</button>
      </div> 
      */}
    </nav>
  );
}

export default Header;
