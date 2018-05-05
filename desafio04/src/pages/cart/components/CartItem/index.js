import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';
import styles from './styles';

const CartItem = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.containerContainer}>
      <View style={styles.detailContainer}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.price}>R$ {product.price}</Text>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <TextInput
          value={`${1}`}
          onChangeText={() => {}}
          style={styles.input}
          underlineColorAndroid={colors.transparent}
          keyboardType="numeric"
          maxLength={2}
          numberOfLines={1}
        />
        <Icon name="close" size={20} color={colors.gray} style={styles.icon} />
      </View>
    </View>
  </View>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartItem;
