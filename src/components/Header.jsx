import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <div className="header ">
        <a className="site_logo" href="#">
          <img src="../images/logo.svg" alt="" />
        </a>
        <ul className="nav">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>
        <button className="header_meniu__btn" onClick={toggleMenu}>
          <img
            className="header_meniu"
            src="../images/icon-hamburger-menu.svg"
            alt="Menu"
          />
        </button>
        <button className="btn header__btn">Browse recipes</button>
        
      </div>
      <hr />

      {/* Modal menu */}
      {menuOpen && (
        <div className="menu_modal">
          <div className="modal__wrapper">
          <ul>
            <li className="modal__li" >
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="modal__li">
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li className="modal__li">
              <NavLink to="/recipes" onClick={() => setMenuOpen(false)}>
                Recipes
              </NavLink>
            </li>
          </ul>
          <div className="modal_btn_wrapper">
            <button className="btnn">Browse recipes</button>
          </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
