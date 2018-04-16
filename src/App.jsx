import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Content from './components/Content';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="container">
      <Header/>
      <Breadcrumb/>
      <Content/>
      </div>
      </div>
    );
  }
}

export default App;
