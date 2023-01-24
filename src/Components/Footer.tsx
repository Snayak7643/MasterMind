import React from "react";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <p>Follow On: </p>

      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <GrFacebook />
      </a>

      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <GrInstagram />
      </a>

      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <GrTwitter />
      </a>
    </div>
  );
};

export default Footer;
