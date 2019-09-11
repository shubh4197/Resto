/**
* This is the Side Menu Drawer Component
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Drawer from 'react-native-drawer';


// Our custom files and classes import
import SideMenu from './SideMenu';


export default class SideMenuDrawer extends Component {
  render() {
    return(
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SideMenu />}
        tapToClose={true}
        acceptTap={true}
        type="overlay"
        openDrawerOffset={0.3}
        onCloseStart={() => Keyboard.dismiss()}
        >
          {this.props.children}
      </Drawer>
    );
  }

  clos() {
    this._drawer.close();
  }

  ope() {
    this._drawer.open();
  }

}
