import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="container">
      <Header/>
      <Breadcrumb/>
      </div>
      </div>
    );
  }
}

export default App;
