import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [menu, setMenu] = useState(false);

  const navbar_varient = {
    hidden: {
      y: "-30px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  const navbar_varient1 = {
    hidden: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        type: "spring",
      },
    },
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header className="d-flex justify-content-between align-items-center">
      <motion.div variants={navbar_varient1} initial="hidden" animate="visible">
        <Link to="/">
          <img
            width="80px"
            src="http://dhakalegalpractice.com/wp-content/uploads/2021/05/Logo-p6ezfxzva2jocsngnnqa9djprlrxbp8ndnyg49sc14.png"
            alt="logo"
          />
        </Link>
      </motion.div>
      <motion.div
        variants={navbar_varient}
        initial="hidden"
        animate="visible"
        className="header-content"
      >
        <ul style={styleMenu}>
          <li onClick={() => setMenu(!menu)}>
            <Link to="/">home</Link>
          </li>
          <li onClick={() => setMenu(!menu)}>
            <Link to="/about">about us</Link>
          </li>
          <li onClick={() => setMenu(!menu)}>
            <Link to="/area">area of practice</Link>
          </li>
          <li onClick={() => setMenu(!menu)}>
            <Link to="/news">news & event</Link>
          </li>
          <li onClick={() => setMenu(!menu)}>
            <Link to="/contact">contact</Link>
          </li>
          <li className="menu cross" onClick={() => setMenu(!menu)}>
            <i className="fas fa-times"></i>
          </li>
        </ul>
      </motion.div>
      <div className="menu menu_bar" onClick={() => setMenu(!menu)}>
        <i className="fas fa-bars icon"></i>
      </div>
    </header>
  );
}

export default Header;
