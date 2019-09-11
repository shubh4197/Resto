/**
 * This is the Checkout Page
 **/

// React native and others libraries imports
import React, { Component } from 'react';
import { TouchableHighlight, AsyncStorage, Alert } from 'react-native';
import {
  Container,
  Content,
  View,
  Grid,
  Col,
  Left,
  Right,
  Button,
  Icon,
  List,
  ListItem,
  Body,
  Radio,
  Input,
  Item,
} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0,
      card: true,
      paypal: false,
      name: '',
      email: '',
      phone: '',
      country: '',
      address: '',
      city: '',
      postcode: '',
      note: '',
      red: '',
    };
  }

  componentWillMount() {
    this.setState({ cartItems: this.props.cartItems });
    var total = 0;
    this.props.cartItems.map(item => {
      total += parseFloat(item.price) * parseInt(item.quantity);
      this.setState({ total: total });
      this.usercart();
    });
  }

  usercart = () => {
    let it = [];
    this.props.cartItems.map(i => {
      it.push(i.title + 'x' + i.quantity);
    });

    let bo = JSON.stringify(it);
    console.log(bo);
    this.setState({ red: bo });
  };

  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name="ios-arrow-back" />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name="search" />
        </Button>
      </Right>
    );
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Navbar left={left} right={right} title="CHECKOUT" />
        <Content padder>
          <View>
            <Text style={{ marginTop: 15, fontSize: 18 }}>
              Shipping information
            </Text>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="Name"
                onChangeText={text => this.setState({ name: text })}
                placeholderTextColor="#687373"
              />
            </Item>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="Email"
                onChangeText={text => this.setState({ email: text })}
                placeholderTextColor="#687373"
              />
            </Item>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="Phone"
                onChangeText={text => this.setState({ phone: text })}
                placeholderTextColor="#687373"
              />
            </Item>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="Country"
                onChangeText={text => this.setState({ country: text })}
                placeholderTextColor="#687373"
              />
            </Item>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="Address"
                onChangeText={text => this.setState({ address: text })}
                placeholderTextColor="#687373"
              />
            </Item>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="City"
                onChangeText={text => this.setState({ city: text })}
                placeholderTextColor="#687373"
              />
            </Item>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="Postcode"
                onChangeText={text => this.setState({ postcode: text })}
                placeholderTextColor="#687373"
              />
            </Item>
            <Item regular style={{ marginTop: 7 }}>
              <Input
                placeholder="Note"
                onChangeText={text => this.setState({ note: text })}
                placeholderTextColor="#687373"
              />
            </Item>
          </View>
          <Text style={{ marginTop: 15, fontSize: 18 }}>Your order</Text>
          <View style={styles.invoice}>
            <List>{this.renderItems()}</List>
            <View style={styles.line} />
            <Grid style={{ paddingLeft: 10, paddingRight: 10, marginTop: 7 }}>
              <Col>
                <Text style={{ fontSize: 18, fontStyle: 'italic' }}>Total</Text>
              </Col>
              <Col>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {'Rs.' + this.state.total}
                </Text>
              </Col>
            </Grid>
          </View>
          <View>
            <Text style={{ marginTop: 15, marginBottom: 7, fontSize: 18 }}>
              Payement method
            </Text>
            <ListItem
              style={{
                borderWidth: 1,
                borderColor: 'rgba(149, 165, 166, 0.3)',
                paddingLeft: 10,
                marginLeft: 0,
              }}>
              <Text>Pay with card</Text>
              <FAIcon
                name="cc-mastercard"
                size={20}
                color="#c0392b"
                style={{ marginLeft: 7 }}
              />
              <FAIcon
                name="cc-visa"
                size={20}
                color="#2980b9"
                style={{ marginLeft: 2 }}
              />
              <Right>
                <Radio
                  selected={this.state.card}
                  onPress={() => this.setState({ card: true, paypal: false })}
                />
              </Right>
            </ListItem>
            <ListItem
              style={{
                borderWidth: 1,
                borderColor: 'rgba(149, 165, 166, 0.3)',
                paddingLeft: 10,
                marginLeft: 0,
                borderTopWidth: 0,
              }}>
              <Text>Pay with Paypal</Text>
              <FAIcon
                name="cc-paypal"
                size={20}
                color="#34495e"
                style={{ marginLeft: 7 }}
              />
              <Right>
                <Radio
                  selected={this.state.paypal}
                  onPress={() => this.setState({ card: false, paypal: true })}
                />
              </Right>
            </ListItem>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10, paddingBottom: 7 }}>
            <Button
              onPress={() => this.checkout()}
              style={{ backgroundColor: Colors.navbarBackgroundColor }}
              block
              iconLeft>
              <Icon name="ios-card" />
              <Text style={{ color: '#fdfdfd' }}>Proceed to payement</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  renderItems() {
    let items = [];
    this.state.cartItems.map((item, i) => {
      var tot = 0;
      tot += parseFloat(item.price) * parseInt(item.quantity);
      items.push(
        <ListItem key={i} style={{ marginLeft: 0 }}>
          <Body style={{ paddingLeft: 10 }}>
            <Text style={{ fontSize: 18 }}>
              {item.quantity > 1 ? item.quantity + 'x ' : null}
              {item.title}
            </Text>
          </Body>
          <Right>
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>
              {'Rs.' + tot}
            </Text>
          </Right>
        </ListItem>
      );
    });
    return items;
  }

  checkout() {
    console.log(this.state);
    alert('Check the log');

    fetch('http://192.168.0.106/Checkout/checkout.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        total: this.state.total,
        card: this.state.card,
        paypal: this.state.paypal,
        phone: this.state.phone,
        country: this.state.country,
        address: this.state.address,
        city: this.state.city,
        postcode: this.state.postcode,
        note: this.state.note,
        cart: this.state.red,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const styles = {
  invoice: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#bdc3c7',
  },
};
