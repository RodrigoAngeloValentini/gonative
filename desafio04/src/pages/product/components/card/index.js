import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';

import { connect } from 'react-redux';
import CartActions from 'redux/ducks/cart';

import { metrics } from 'styles';
import styles from './styles';

class ProductCart extends Component {
  static propTypes = {
    product: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
      cartProductId: PropTypes.string,
    }),
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
    cartAdd: PropTypes.func.isRequired,
    cartRemove: PropTypes.func.isRequired,
  };

  static defaultProps = {
    product: {
      cartProductId: () => this.props.product.cartProductId,
    },
  };

  state = {
    opacity: new Animated.Value(0.1),
    offset: new Animated.ValueXY({ y: metrics.screenHeight / 80, x: 0 }),
    offsetTitle: new Animated.ValueXY({ x: metrics.screenWidth, y: 0 }),
    offsetBtn: new Animated.ValueXY({ x: metrics.screenWidth, y: 0 }),
  };

  componentDidMount() {
    Animated.sequence([
      Animated.delay(20),

      Animated.parallel([
        Animated.timing(this.state.offset.y, {
          toValue: 0,
          duration: 700,
          easing: Easing.linear(Easing.bounce),
        }),
        Animated.timing(this.state.offsetTitle.x, {
          toValue: 0,
          duration: 150,
          easing: Easing.in(Easing.bounce),
        }),
        Animated.timing(this.state.offsetBtn.x, {
          toValue: 0,
          duration: 170,
          easing: Easing.in(Easing.bounce),
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 100,
        }),
      ]),
    ]).start();
  }

  addOrRemove = () => {
    if (this.marked()) {
      this.props.cartRemove(this.props.product.cartProductId);
    } else {
      this.props.cartAdd(this.props.product);
    }
  };

  marked = () =>
    this.props.cart.products.some(product => product.cartProductId === this.props.product.cartProductId);

  render() {
    return (
      <Animated.View
        style={[
          { transform: [...this.state.offset.getTranslateTransform()] },
          { opacity: this.state.opacity },
          styles.container,
        ]}
      >
        <View style={styles.containerImg}>
          <Image source={{ uri: this.props.product.data.image }} style={styles.cover} />
        </View>

        <Animated.View
          style={[
            { transform: [...this.state.offsetTitle.getTranslateTransform()] },
            { opacity: this.state.opacity },
          ]}
        >
          <View style={styles.containerText}>
            <View style={styles.left}>
              <Text style={styles.title}>{this.props.product.data.name}</Text>
              <Text style={styles.subTitle}>{this.props.product.data.brand}</Text>
            </View>

            <View style={styles.right}>
              <Text style={styles.price}>R${this.props.product.data.price}</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={[
            { transform: [...this.state.offsetBtn.getTranslateTransform()] },
            { opacity: this.state.opacity },
          ]}
        >
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.btn, this.marked() ? styles.rose : styles.green]}
              activeOpacity={0.8}
              onPress={this.addOrRemove}
            >
              <Text style={styles.btnText}>
                {this.marked() ? 'Remover do Carrinho' : 'Adicionar ao Carrinho'}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  cartAdd: data => dispatch(CartActions.cartAdd(data)),
  cartRemove: data => dispatch(CartActions.cartRemove(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
