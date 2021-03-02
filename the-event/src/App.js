import React, { Component } from 'react';

import Header from './components/Header/Header';
import Featured from './components/Featured';
import VenueNFO from './components/VenueNFO';
import Highlight from './components/Highlight';


import './resources/styles.css';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Featured />
        <VenueNFO />
        <Highlight />
      </div>
    )
  }
}

export default App
