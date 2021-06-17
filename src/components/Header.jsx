import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header className="container d-flex justify-content-between align-items-center">
      <div>
        <Link to="/">
          <img
            width="80px"
            src="http://dhakalegalpractice.com/wp-content/uploads/2021/05/Logo-p6ezfxzva2jocsngnnqa9djprlrxbp8ndnyg49sc14.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-content">
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
      </div>
      <div className="menu menu_bar" onClick={() => setMenu(!menu)}>
        <i className="fas fa-bars icon"></i>
      </div>
    </header>
  );
}

export default Header;
