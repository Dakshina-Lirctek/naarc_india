import React, { Component } from 'react';
import NavBar from './components/pages/navbar/navbar';
import Home from './components/pages/home/Home';
import Statics from "./components/pages/Statics/Statics";
import Footer from './components/pages/Footer/Footer';
import Update from './components/pages/Updates/Update';
import "./App.css";

export default class App extends Component {
  render() {
    return (<div>
      <NavBar/>
      <Home/>
      <Statics/>
      <Update/>
      <Footer/>
    </div>)
  }
}
