import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';


// Our custom files and classes import
import Home from './page/Home';
import Category from './page/Category';
import Product from './page/Product';
import Cart from './page/Cart';
import Checkout from './page/Checkout';
import Map from './page/Map';
import Contact from './page/Contact';
import Search from './page/Search';
import Login from './page/Login';
import Signup from './page/Signup';

export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
          <Scene initial key="Signup" component={Signup} hideNavBar />
          <Scene  key="login" component={Login} hideNavBar />
            <Scene  key="home" component={Home} hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
             <Scene key="cart" component={Cart} hideNavBar />
             <Scene key="checkout" component={Checkout} hideNavBar />
              <Scene key="map" component={Map} hideNavBar />
              <Scene key="contact" component={Contact} hideNavBar />
              <Scene key="search" component={Search} hideNavBar />
          </Scene>
        </Router>
      </Root>
    );
  }

}