/**
* This is the contact page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, View, Icon, Left, Button, Item, Input,Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { TouchableHighlight } from 'react-native';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import Colors from '../Colors';

export default class Contact extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        name: '',
        subject: '',
        message: ''
      }
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-close" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
          <Navbar left={left} title="CONTACT" />
             <View style={{ marginTop: 15, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)' }}>
              <Text style={{ marginBottom: 5 }}>Note</Text>
              <View style={{ width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10 }} />
              <NBText note>
                Please fill in your details and state your issue.We will contact you shortly.
              </NBText>
              </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50}}>
              <Item>
                  <Icon active name='person' />
                  <Input placeholder='Your name' onChangeText={(text) => this.setState({name: text})}/>
              </Item>
              <Item>
                  <Icon active name='mail' />
                  <Input placeholder='Your email address' onChangeText={(text) => this.setState({email: text})}/>
              </Item>
              <Item>
                  <Icon active name='filing' />
                  <Input placeholder='Subject' onChangeText={(text) => this.setState({subject: text})}/>
              </Item>
              <Item>
                  <Icon active name='paper' style={{marginTop: -20}}/>
                  <Input
                    placeholder='Message'
                    multiline={true}
                    style={{height: 100, marginTop: -20}}
                    onChangeText={(text) => this.setState({message: text})}/>
              </Item>
              <View style={{alignItems: 'center'}}>
                <Button onPress={() => this.send()} style={{backgroundColor: Colors.navbarBackgroundColor, marginTop: 20}}>
                  <Text style={{color: '#fdfdfd'}}>Send</Text>
                </Button>
              </View>
            </View>
      </Container>
    );
  }

  send() {
    alert('Email Sent');
    console.log(this.state);
  }
}
