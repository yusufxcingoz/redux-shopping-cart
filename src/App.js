import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Header from "./components/Header";

import "./App.css";
import ShoppingCard from "./components/ShoppingCard";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { connect } from "react-redux";

function App({ currentItem }) {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/shoppingcard" component={ShoppingCard} />

          {!currentItem ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={ProductDetail} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
