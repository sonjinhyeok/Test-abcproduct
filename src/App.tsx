import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Stock from "./Pages/Stock/Stock";
import Order from "./Pages/Order/Order";
import Detail from "./Pages/Detail/Detail";
import Add from "./Pages/Add/Add";

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stock">
            <Stock />
          </Route> 
          <Route path="/order">
            <Order />
          </Route> 
          <Route path="/detail">
            <Detail />
          </Route>
          <Route exact path="/stock/add">
            <Add />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}