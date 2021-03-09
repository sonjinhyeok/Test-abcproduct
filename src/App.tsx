import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./App.scss";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home";
import Stocks from "./Pages/Stocks";
import Orders from "./Pages/Orders";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar></SideBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}