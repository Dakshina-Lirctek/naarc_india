import React, { Component } from 'react';
import "./navbar.css";
import "./naarclogo.png";
import {Link, BrowserRouter as Router} from 'react-router-dom';
import NAARC_Logo from "../../images/NAARC Logo.jpg"

export default class Navbar extends Component {
  state = { clicked : false};

handleClick = () => {
    this.setState ({ clicked: ! this.state.clicked})
}

    render() {
        return (
          <div class="header">
            <Router>
              <img id="logo_image" src={NAARC_Logo} alt="logo"></img>
            <Link class="navbar-brand" href="/">
            </Link>
            <Link href="#default" class="logo" style={{backgroundColor:"white"}}>NAARC</Link>
          <div class="header-right">
            <Link class="" href="#home" ><b>Home</b></Link>
            <Link to="/About" href="#about"><b>About</b></Link>
            <Link href="#contact"><b>Contact</b></Link>
            <Link href="#trustees"><b>Trustees</b></Link>
            <Link href="#gallery"><b>Gallery</b></Link>
            <Link href="#donate"><b>DonateUs</b></Link>
            <Link id="join" href="#join"><b>JoinUs</b></Link>
          <a><i  id="burger" onClick = {this.handleClick} className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i></a>
         </div>  
         </Router>
         <br></br>
        </div>
        );
    }
}

