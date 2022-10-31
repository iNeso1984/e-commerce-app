import React, { Component } from 'react'
// import styled  from 'styled-components'
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { ProductConsumer } from './Context';
import PropTypes from 'prop-types';

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
   
        <Button variant="dark" className="cart-btn" disabled ={inCart ? true :false} onClick={()=>{console.log("added to cart")}}>
        {inCart?(<p className="text-capitalize mb-0" disabled>{""}in cart</p>):(<i className="fas fa-cart-plus"/>)}
        </Button>
        
        
        </div>

        {/* footer */}

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font italic mb-0">
            <span className="mr-1">$</span>{price}
          </h5>
        </div>
      </div>
      </Card.Body>
      </Card>
    )
  }
}
Product.propTypes={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCar:PropTypes.bool
  }).isRequired
};
// const ProductWrapper= styled.div 

