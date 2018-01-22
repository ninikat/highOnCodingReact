import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './site.css'
import {Header} from './components/Header';
import {SubHeader} from './components/SubHeader';
import {MainContent} from './components/MainContent';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SubHeader/>
        <MainContent/>
      </div>

    );
  }
}

export default App;
