import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div >
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
