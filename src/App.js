import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise=loadStripe(
  "pk_test_51J0GIcSENvjXnPl03h2xBBIg1ZHX70Ux2bmaJl7cGmnqM7LAyU2ZcxlkwtZenojY2hYrkTIgMjgClOB41Rpnn95f00MQ2dI0rT"
  );

function App() {
  const [{basket},dispatch]=useStateValue();



  useEffect(() =>{
    //will only runs once when the app component loads... 
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (

    <Router>
    <div className="App">
    
      <Switch>
      <Route path="/login">
          <Login/>
        </Route>
      <Route path="/checkout">
          <Header/> 
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/> 
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>
        {/*always place default root at the bottom */}
        <Route path="/">
          <Header/> 
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
