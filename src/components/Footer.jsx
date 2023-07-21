import React from "react";
import Logo from "../assets/Logo-3.png";
const Footer = () => {
  return (
    <>
      <div className="logo footer">
        <img src={Logo} alt="Little Lemon Logo" width={50} height={80} />
      </div>
      <div className="copyright">
        &copy; 2023 Little Lemon. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
