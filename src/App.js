import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venuNFO';
import Highligts from './components/Highligts';
import Pricing from './components/pricing';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Element name="header"><Header/></Element>
        <Element name="featured"><Featured/></Element>
        <Element name="vunuenfo"><VunueNfo/></Element>
        <Element name="highligts"><Highligts/></Element>
        <Element name="pricing"><Pricing/></Element>
      </div>
    );
  }
}

export default App;
 