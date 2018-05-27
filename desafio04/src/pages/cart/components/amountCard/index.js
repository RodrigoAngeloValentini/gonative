import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import CartActions from 'redux/ducks/cart';

import styles from './styles';

class AmountCard extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
  };

  getSubtotal = () =>
    this.props.cart.products.reduce((amount, item) => amount + item.data.price * item.qty, 0);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Subtotal</Text>
        <Text style={styles.subtitle}>R$: {this.getSubtotal().toFixed(2)}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  cartSubtotal: data => dispatch(CartActions.cartSubtotal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AmountCard);
