import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Stocks from "./Pages/Stocks/Stocks";
import Orders from "./Pages/Orders/Orders";
import Detail from "./Pages/Detail/Detail";
import Add from "./Pages/Add/Add";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route> 
          <Route path="/orders">
            <Orders />
          </Route> 
          <Route path="/detail">
            <Detail />
          </Route> 
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}