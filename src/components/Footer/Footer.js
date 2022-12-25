import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <p id="footer-text">
          © {new Date().getFullYear()} copyright bo-codes & sus{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
