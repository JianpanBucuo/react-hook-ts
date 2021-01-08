import React,{Fragment} from 'react';
import './App.css';
import {  Switch,
    Route } from "react-router-dom";
import Home from './pages/home/index'
import Order from './pages/order/index'
function App() {
  return (
    <div className="App">
        <Fragment>
            <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/order">
                <Order />
            </Route>
            </Switch>
        </Fragment>
    </div>
  );
}

export default App;
