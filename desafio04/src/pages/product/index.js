import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import ProductCard from 'pages/product/components/card';

import styles from './styles';

export default class product extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          data: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
          }),
          cartProductId: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  componentWillMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ProductCard product={this.props.navigation.state.params} />
      </View>
    );
  }
}
