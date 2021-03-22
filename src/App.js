import './App.css';

import { Switch, Route } from "react-router-dom";

import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

import Header from "./components/header/header.component";
import Footer from './components/footer/footer.component';
import Faq from './components/faq/faq.component';
import ContactUs from './pages/contact-us/contact-us.component';
import GalleryPage from './pages/gallery/gallery.component';


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
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/signin" component={SignInAndSignUpPage} />
      <Route exact to="/contact" component={ContactUs} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
