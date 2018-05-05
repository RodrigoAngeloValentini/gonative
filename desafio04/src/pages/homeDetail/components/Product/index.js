import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Product = ({ product }) =>
  (product ? (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {product.price}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonTitle}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null);

Product.defaultProps = {
  product: null,
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Product;
