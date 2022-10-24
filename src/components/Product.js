import React, { Component } from 'react'
// import styled  from 'styled-components'
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { ProductConsumer } from './Context';

export default class Product extends Component {

  render() {
    const {id,title, img, price, inCart}= this.props.product;
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <div>

        <div className ="img-container p-5" onClick={console.log("clicked on image container")}>
        <Link to="/Details">
          <img src={img} alt="handbag img" className="card-img-top"></img>
        </Link>
        <Button variant="dark" className="detail-btn" disabled ={inCart ? true :false} onClick={()=>{console.log("added to cart")}}>Details</Button> 
        
        </div>
      </div>
      </Card.Body>
      </Card>
    )
  }
}
// const ProductWrapper= styled.div 

