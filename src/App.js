import { Route, Switch } from "react-router";
import "./App.scss";
import { HomePage } from "./components/home-page/HomePage";
import { NotFound } from "./components/home-page/NotFound";
import { Shop } from "./components/pages/Shop";
import SingleProduct from "./components/single-product/SingleProduct";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
