import React, { Component } from 'react';
import web3 from '../web3';
import ipfs from '../ipfs';
import storehash from '../storehash';
import { Button,Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Row, Col,Container } from 'reactstrap';
import logo from '../logo.svg';
import '../App.css';


const CardComponent = (props) => {
  return (
    
    <div className="inlineblock card">
      <h3>
        Header {props.message} 
      </h3>
      <sub>subs</sub>
    </div>
  );
};

export default CardComponent;