import React, { Component } from 'react';
import Navbar from './components/pages/navbar/navbar';
import Home from './components/pages/home/Home';
import Statics from "./components/pages/Statics/Statics";

export default class App extends Component {
  render() {
    return (<div>
      <Navbar/>
      <Home/>
      <Statics/>
    </div>)
  }
}
