import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";
import ShoppingCard from "./components/ShoppingCard";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/shoppingcard">
            <ShoppingCard />
          </Route>
          <Route path="/">
            <div class="flex ">
              <Products />;
            </div>
          </Route>
          <Route exact path="/product/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
