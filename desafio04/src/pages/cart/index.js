import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import CartItem from './components/CartItem';

import styles from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  state = {
    cart: [
      {
        id: 1,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image:
          'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
        price: 49.99,
      },
      {
        id: 2,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image:
          'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
        price: 49.99,
      },
      {
        id: 3,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image:
          'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
        price: 49.99,
      },
      {
        id: 4,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image:
          'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
        price: 49.99,
      },
    ],
  };

  componentDidMount() {}

  renderCartItems = () => (
    <FlatList
      data={this.state.cart}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <CartItem product={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderCartItems()}
        <View style={styles.totalContainer}>
          <Text style={styles.title}>Subtotal</Text>
          <Text style={styles.price}>R$ 200,00</Text>
        </View>
      </View>
    );
  }
}

export default Cart;
