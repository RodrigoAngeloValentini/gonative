import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Animated } from 'react-native';

import Categories from 'pages/home/components/categories';
import Products from 'pages/home/components/products';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoriesActions from 'redux/ducks/categories';
import ProductsActions from 'redux/ducks/products';

import styles from './styles';

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        routeName: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
      }),
      dispatch: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    opacity: new Animated.Value(0),
    offset: new Animated.ValueXY({ x: 0, y: 25 }),
    offsetMenu: new Animated.ValueXY({ x: 0, y: -100 }),
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.offsetMenu.y, {
        toValue: 0,
        duration: 1000,
      }),

      Animated.delay(20),

      Animated.parallel([
        Animated.timing(this.state.offset.y, {
          toValue: 0,
          duration: 350,
        }),

        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 350,
        }),
      ]),
    ]).start();
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Animated.View style={[{ transform: [...this.state.offsetMenu.getTranslateTransform()] }]}>
          <Categories />
        </Animated.View>

        <Animated.View
          style={[
            { transform: [...this.state.offset.getTranslateTransform()] },
            { opacity: this.state.opacity },
            styles.container,
          ]}
        >
          <Products navigation={this.props.navigation} />
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    categoriesRequest: () => dispatch(CategoriesActions.categoriesRequest()),
    productsRequest: id => dispatch(ProductsActions.productsRequest(id)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
