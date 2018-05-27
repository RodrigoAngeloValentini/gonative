import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, ScrollView, Text } from 'react-native';

import CartCard from 'pages/cart/components/card';
import CartAmount from 'pages/cart/components/amountCard';

import { connect } from 'react-redux';

import styles from './styles';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
  };

  renderScroll = products => (
    <View style={styles.scrollContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {products.map((product, indice) => (
          <CartCard key={product.cartProductId} product={product} indice={indice} />
        ))}
        <View style={styles.space} />
      </ScrollView>
      <CartAmount style={styles.amountContainer} />
    </View>
  );

  renderOrFail = products =>
    (this.props.cart.products.length ? (
      this.renderScroll(products)
    ) : (
      <Text style={styles.errorMsg}>Carrinho Vazio</Text>
    ));

  render() {
    return <View style={styles.container}>{this.renderOrFail(this.props.cart.products)}</View>;
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Cart);
