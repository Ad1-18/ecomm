import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Wishlist from "./Wishlist.js";
import Login from "./Login.js";
import Users from "./Users.js"
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase.js"
import UserDetails from './UserDetails';

function App() {
  const [{user},dispatch] = useStateValue();

  // Use Effect hook
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }
      else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });

    return() => {
      // Cleanup
      unsubscribe();
    }
  }, []);

  console.log("USER IS>>",user);

  return (

    <Router>
    <div className="app">
      <h1></h1>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/wl">
            <Header />
            <Wishlist />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path = "/user">
            <Users />
          </Route>
          <Route path = "/user1">
            <UserDetails/>
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
