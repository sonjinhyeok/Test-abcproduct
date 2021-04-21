import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Stock from "./Pages/Stock/Stock";
import Order from "./Pages/Order/Order";
import StockDetail from "./Pages/StockDetail/StockDetail";
import Add from "./Pages/Add/Add";

export default function App() {

  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Fragment>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/stock">
            <Stock/>
            <Route exact path="/stock/detail/:productId" component={StockDetail} />
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
}