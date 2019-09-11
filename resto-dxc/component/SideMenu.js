/**
* This is the SideMenu component used in the navbar
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import { View, List, ListItem, Body, Left, Right, Icon, Item, Input, Button, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from './Text';

export default class SideMenu extends Component {
  constructor(props) {
      super(props);
      
  }

  render() {
    return(
          <ScrollView style={styles.container}>
              {this.renderMenu()}
          </ScrollView>
    );
  }

  renderMenu() {
    
      return(
        <View>
          
          <View style={{paddingRight: 15}}>
          <Text style={{alignItems:'center',fontSize:20,marginTop:20,marginLeft:20}}>Navigate</Text>
            <List>
              <ListItem
                icon
                key={0}
                button={true}
                onPress={() => Actions.home()}
              >
                <Body>
                  <Text>Home</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
              {this.renderMenuItems()}
            </List>
          </View>
          <View style={styles.line} />
          <View style={{paddingRight: 15}}>
            <List>
              {this.renderSecondaryList()}
            </List>
          </View>
          <View style={styles.line} />
          <View style={{paddingRight: 15, paddingLeft: 15}}>
            <Text style={{marginBottom: 7}}>Follow us</Text>
            <Grid>
              <Col style={{alignItems: 'center'}}><Icon style={{fontSize: 18}} name='logo-facebook' onPress={() => Linking.openURL('http://www.facebook.com/').catch(err => console.error('An error occurred', err))} /></Col>
              <Col style={{alignItems: 'center'}}><Icon style={{fontSize: 18}} name='logo-instagram' onPress={() => Linking.openURL('http://www.instagram.com/').catch(err => console.error('An error occurred', err))} /></Col>
              <Col style={{alignItems: 'center'}}><Icon style={{fontSize: 18}} name='logo-twitter' onPress={() => Linking.openURL('http://www.twitter.com/').catch(err => console.error('An error occurred', err))} /></Col>
              <Col style={{alignItems: 'center'}}><Icon style={{fontSize: 18}} name='logo-youtube' onPress={() => Linking.openURL('http://www.youtube.com/').catch(err => console.error('An error occurred', err))} /></Col>
              <Col style={{alignItems: 'center'}}><Icon style={{fontSize: 18}} name='logo-snapchat' onPress={() => Linking.openURL('http://www.snapchat.com/').catch(err => console.error('An error occurred', err))} /></Col>
            </Grid>
          </View>
        </View>
      );
    
   
  }

  renderMenuItems() {
    let items = [];
    menuItems.map((item, i) => {
      items.push(
        <ListItem
          last={menuItems.length === i+1}
          icon
          key={item.id}
          button={true}
          onPress={() => this.itemClicked(item)}
        >
          <Body>
            <Text>{item.title}</Text>
          </Body>
          <Right>
            <Icon name="ios-arrow-forward" />
          </Right>
        </ListItem>
      );
    });
    return items;
  }

  itemClicked(item) {
    
      Actions.category({id: item.id, title: item.title});
  }

 

  renderSecondaryList() {
    let secondaryItems = [];
    menusSecondaryItems.map((item, i) => {
      secondaryItems.push(
        <ListItem
          last
          icon
          key={item.id}
          button={true}
          onPress={Actions[item.key]}
        >
          <Left>
            <Icon style={{fontSize: 18}} name={item.icon} />
          </Left>
          <Body style={{marginLeft: -15}}>
            <Text style={{fontSize: 16}}>{item.title}</Text>
          </Body>
        </ListItem>
      );
    });
    return secondaryItems;
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(189, 195, 199, 0.6)',
    marginTop: 10,
    marginBottom: 10
  }
};

var menuItems = [
  {
    id: 5,
    title: 'Vegetarian',
    
  },
  {
    id: 2,
    title: 'Non-Vegetarian',
    
  },
  {
    id: 1,
    title: 'Breads'
  },
  {
    id: 4,
    title: 'Desserts'
  }
];


const menusSecondaryItems = [
 
  {
    id: 20,
    key: 'map',
    title: 'Store Finder',
    icon: 'ios-pin',
    key: 'map'
  },
  {
    id: 21,
    key: 'contact',
    title: 'Contact Us',
    icon: 'md-phone-portrait',
    key: 'contact'
  }
 
];
