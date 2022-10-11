// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faHome } from '@fortawesome/free-solid-svg-icons'
import "./App.css";
import React from "react";
import {Switch, Route} from "react-router-dom"
// const element = <FontAwesomeIcon icon={faHome} />
import Navbar from "./components/Navbar";

import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route  component={Default}></Route>
      </Switch>
    
     
    </>
  );
}

export default App;
