import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center mx-auto py-4">
      <p className="px-2">
        <Link style={{ textDecoration: "none", color: "#fff", textTransform:"uppercase", fontSize:"20px" }} to="/contact"><i className="fas fa-hand-pointer"></i> contact us</Link>
      </p>
      <p className="px-2"><i className="fas fa-walking"></i> 102, Kakrail Road, Ground Floor, Dhaka-1000</p>
      <p className="px-2"><i className="fas fa-phone-alt"></i> +880 1754505954</p>
      <p className="px-2"><i className="fas fa-envelope-open-text"></i> dhakalegalpractice2020@gmail.com</p>
      <p className="px-2">Developed by Rashed Abir</p>
      <p className="px-1">
        <i className="fab fa-linkedin social"></i>
        <i className="fab fa-facebook-square social"></i>
        <i className="fab fa-twitter-square social"></i>
        <i className="fab fa-youtube social"></i>
        <i className="fab fa-instagram-square social"></i>
      </p>
    </footer>
  );
}

export default Footer;
