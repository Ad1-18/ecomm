import React, {lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
//import Checkout from "./Checkout.js";
const Checkout = lazy(() => import("./Checkout.js"))
//import Wishlist from "./Wishlist.js";
const Wishlist = lazy(() => import("./Wishlist.js"))

function App() {
  return (

    <Router>
    <div className="app">
      <h1></h1>
        <Switch>
          <Route path="/checkout">
            <Suspense fallback = {<div> Loading ...</div>}>
              <Header />
              <Checkout />
            </Suspense>
          </Route>
          <Route path="/wl">
            <Suspense fallback = {<div> Loading ...</div>}>
              <Header />
              <Wishlist />
            </Suspense>
          </Route>
          <Route path="/login">
            <h1> Login page </h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">    
            <Header /> 
            <Home />     
            
          </Route>
        </Switch>
    </div>
    </Router>
  );
}
{/* localhost.com */}
{/* localhost.com/checkout*/}
{/* localhost.com/login */}


export default App;
