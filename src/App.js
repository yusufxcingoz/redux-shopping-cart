import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";
import ShoppingCard from "./components/ShoppingCard";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
export default function App() {
  const products = [
    {
      name: "Awesome Ring",
      price: 20,
      Id: "a789c",
      ImageUrl: "https://pngimg.com/uploads/ring/ring_PNG38.png",
    },
    {
      name: "Rubic Cube",
      price: 30,
      Id: "a78asd9c",
      ImageUrl:
        "https://i.pinimg.com/originals/08/05/a8/0805a8f92d5f8a31a15587859b965264.png",
    },
  ];

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
              {products.map((e) => {
                return <Products products={e} />;
              })}
            </div>
          </Route>
          <Route exact path="/product/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
}
