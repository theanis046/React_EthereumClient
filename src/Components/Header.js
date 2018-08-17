import React, { Component } from 'react';
import web3 from '../web3';
import ipfs from '../ipfs';
import storehash from '../storehash';
import { Button,Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Row, Col,Container } from 'reactstrap';
import logo from '../logo.svg';
import '../App.css';


const Header = (props) => {
  return (
    
    <ul>
        <li><a href="#contact">Name</a></li>
        <li><a href="#about">Id</a></li>
    </ul>
  );
};

export default Header;