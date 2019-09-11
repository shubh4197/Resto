/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { View, Container, Content, Button, Left, Right, Icon, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';


// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import { default as ProductComponent } from '../component/Product';

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quantity: 1
      
    };
  }

  componentWillMount() {
    //get the product with id of this.props.product.id from your server
    this.setState({ product: this.props.product });
  }

  

  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Navbar left={left} right={right} title={this.props.product.title} />
        <Content>
         <Image style={{ height: 200,
    width: null,
    flex: 1}} source={{uri:this.props.product.image}}/>



         
          <View style={{ backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center' }}>
            <Grid>
              <Col size={3}>
                <Text style={{ fontSize: 18 }}>{this.state.product.title}</Text>
              </Col>
              <Col>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{"Rs."+this.state.product.price}</Text>
              </Col>
            </Grid>
            <Grid style={{ marginTop: 15 }}>
              
          
              <Col>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text>Quantity:</Text>
                </View>
              </Col>
              <Col size={3}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Button block icon transparent onPress={() => this.setState({ quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1 })} >
                    <Icon name='ios-remove' style={{ color: Colors.navbarBackgroundColor }} />
                  </Button>
                  <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', paddingLeft: 30, paddingRight: 30 }}>
                    <Text style={{ fontSize: 18 }}>{this.state.quantity}</Text>
                  </View>
                  <Button block icon transparent onPress={() => this.setState({ quantity: this.state.quantity + 1 })}>
                    <Icon style={{ color: Colors.navbarBackgroundColor }} name='ios-add' />
                  </Button>
                </View>
              </Col>
            </Grid>
            <Grid style={{ marginTop: 15 }}>
              <Col size={3}>
                <Button block onPress={this.addToCart.bind(this)} style={{ backgroundColor: Colors.navbarBackgroundColor }}>
                  <Text style={{ color: "#fdfdfd", marginLeft: 5 }}>Add to cart</Text>
                </Button>
              </Col>
              
            </Grid>
            <View style={{ marginTop: 15, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)' }}>
              <Text style={{ marginBottom: 5 }}>Description</Text>
              <View style={{ width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10 }} />
              <NBText note>
                {this.state.product.description}
              </NBText>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
 
 addToCart() {
    var product = this.state.product;
    product['quantity'] = this.state.quantity;
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) AsyncStorage.setItem("CART", JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        items.push(product);
        AsyncStorage.setItem("CART", JSON.stringify(items));
      }
      Toast.show({
        text: 'Product added to your cart !',
        position: 'bottom',
        type: 'success',
        buttonText: 'Dismiss',
        duration: 3000
      });
    });
  }


}

