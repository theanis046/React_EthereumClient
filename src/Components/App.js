import React, { Component } from 'react';

import web3 from '../web3';
import ipfs from '../ipfs';
import storehash from '../storehash';
import { Button } from 'reactstrap';
import logo from '../logo.svg';
import CardComponent from './CardComponent';
import Header from './Header'
import '../App.css';


class App extends Component {

  createCardComponent = () => {
      let div = [];
      let children = []
      for (let j = 0; j < 10; j++) {
        children.push(<CardComponent message={j} ></CardComponent>)
      }
      div.push(children);
      return div;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.createCardComponent()}
      </div>
     
    );
  }
}

export default App;
