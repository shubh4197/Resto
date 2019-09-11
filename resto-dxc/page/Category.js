/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Left, Right, Button, Icon, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import Product from '../component/Product';


export default class Category extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: []
      };
  }

  componentWillMount() {
    var products = [
      {id: 1, title: 'Paneer Butter Masala', categoryId: 5, categoryTitle: 'Veg', price: '200', image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/04/paneer-butter-masala-paneer-makhani.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 2, title: 'Tandoori Chicken', categoryId: 2, categoryTitle: 'Non-Veg', price: '350', image: 'http://lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_10.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 10, title: 'Tandoori Roti', categoryId: 1, categoryTitle: 'Breads', price: '10', image: 'https://spiceaffairs.in/wp-content/uploads/2017/06/FullSizeRender_1-4-750x544.jpg',description:'I am fluffy'},
      {id: 15, title: 'Kadhai Paneer', categoryId: 5, categoryTitle: 'Veg', price: '220', image: 'http://www.ndtv.com/cooks/images/kadhai%20paneer.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 11, title: 'Dal Makhani', categoryId: 5, categoryTitle: 'Veg', price: ' 150', image: 'https://recipes.timesofindia.com/photo/53097626.cms', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 22, title: 'Butter Chicken', categoryId: 2, categoryTitle: 'Non-Veg', price: '250', image: 'https://www.simplyrecipes.com/wp-content/uploads/2019/01/Butter-Chicken-LEAD-5.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 100, title: 'Naan', categoryId: 1, categoryTitle: 'Breads', price: '12', image: 'https://i.ytimg.com/vi/e7sUV8nqs3k/maxresdefault.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 215, title: 'Gulab Jamun', categoryId: 4, categoryTitle: 'Dessert', price: '30', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Gulaab_Jamun_%28homemade%21%29_bright.jpg/250px-Gulaab_Jamun_%28homemade%21%29_bright.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 12, title: 'Ice Cream(Any Flavour)', categoryId: 4, categoryTitle: 'Dessert', price: '60', image: 'https://img.taste.com.au/qBvEztmO/w1200-h630-cfill/taste/2017/03/nutella-icecream-124606-1.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 29, title: 'Mughlai Chicken', categoryId: 2, categoryTitle: 'Non-Veg', price: '240', image: 'http://4.bp.blogspot.com/-aJzvGjGcaew/Ur0IaagRXRI/AAAAAAAADdg/GIotmrZBkj8/s1600/Easy+Chicken+Mughlai++(2).jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 16, title: 'Rumali Roti', categoryId: 1, categoryTitle: 'Breads', price: '12', image: 'https://i0.wp.com/www.cookingfromheart.com/wp-content/uploads/2016/07/CH_DSC_0063_8.jpg?resize=800%2C533', description: "Hello there, i'm a cool product with a heart of gold."},
    ];
    let items=[]
    products.map(i=>{if(this.props.id===i.categoryId){
     items.push(i);
    }})
    this.setState({items});
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.ope()} transparent>
          <Icon name='menu' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='search' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );

    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container style={{backgroundColor: '#fdfdfd'}}>
            <Navbar left={left} right={right} title={this.props.title} />
            <Content padder>
              {this.renderProducts()}
            </Content>
          </Container>
      </SideMenuDrawer >
    );
  }

  renderProducts() {
    let items = [];
    let stateItems = this.state.items
     stateItems.map(i=>{
     items.push(
            <Grid >
            <Product  product={i} />
            </Grid>
    )});
      
     
    return items;
  }
}
