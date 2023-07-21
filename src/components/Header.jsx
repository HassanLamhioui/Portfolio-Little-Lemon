import React from "react";
import Logo from "../assets/Logo-1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" width={200} height={50} className="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Bookings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
