import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const ProductItem = ({ product, navigation }) => (
  <View style={styles.container}>
    <View style={styles.productContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('HomeDetail', { productId: product.id });
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
        </View>
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

ProductItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default withNavigation(ProductItem);
