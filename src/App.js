import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Review } from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/shop" component={Shop}/>
          <Route path="/review" component={Review}/>
          <Route path="/inventory"><Inventory/></Route>
          <Route exact path="/"><Shop/></Route>
          <Route path="/product/:category"><ProductDetail/></Route>
          <Route path="*"><NotFound/></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
