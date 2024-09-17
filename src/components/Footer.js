import React from "react";
import logoFooter from "../assets/img/logo-footer.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <img className="logo-footer" src={logoFooter} alt="logo footer" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
