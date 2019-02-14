import React, { Component } from 'react';
import './App.scss';
import "antd/dist/antd.css";

import { Button } from 'antd';

import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList/index'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
