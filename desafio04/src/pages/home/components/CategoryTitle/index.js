import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CategoryTitle = props => (
  <View style={styles.categoryBox}>
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={[styles.categoryTitle, props.active ? styles.categoryTitleActive : null]}>
        {props.category.title}
      </Text>
    </TouchableOpacity>
  </View>
);

CategoryTitle.defaultProps = {
  active: false,
};

CategoryTitle.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default CategoryTitle;
