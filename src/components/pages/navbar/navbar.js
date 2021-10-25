import React, { useState } from "react";
import { NavLink , BrowserRouter as Router } from "react-router-dom";
import "./navbar.css";
import NAARC_LOGO from "../../images/NAARC_Logo.jpg"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav style={{minHeight:"100px"}} className="navbar">
        <div className="nav-container">
        <img style={{maxHeight:"58px", marginLeft:"15px",marginRight:"2.4rem"}} src={NAARC_LOGO} alt="logo"/>
          <Router>
            <div style={{display:"flex",textAlign:"center"}}>
          <NavLink style={{letterSpacing:"8px",fontWeight:"bold",fontSize:"2.5vw",marginRight:"20rem"}} exact to="/" className="nav-logo">
          <abbr className="abbr" style={{textDecoration:"none",borderRadius:"10px",padding:"5px",border:"2px solid black"}} title="Nature Augementation And Rehabilitation of Civilization">NAARC</abbr> 
          </NavLink>
            </div>
          <ul style={{fontWeight:"bolder"}} className={click ? "nav-menu active" : "nav-menu"}>
            <li  className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/donate"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DonateUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/join"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                JoinUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
          </Router>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;