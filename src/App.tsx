import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import Stock from "./pages/Stock/Stock";
import Order from "./pages/Order/Order";
import StockDetail from "./pages/StockDetail/StockDetail";
import Add from "./pages/Add/Add";

export default function App() {

  return (
    <Router>
      <div className="App">
        <SideBar />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/stock/detail/:productId" component={StockDetail} />
          <Route path="/stock/add" component={Add} />
          <Route path="/stock" component={Stock} />
        </Switch>
        <Route path="/order" component={Order} />
      </div>
    </Router>
  );
}