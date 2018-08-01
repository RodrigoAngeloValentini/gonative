import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { colors } from 'styles';
import styles from './styles';

const Button = ({ title, onPress, loading }) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
    {loading ? (
      <ActivityIndicator size="small" color={colors.white} />
    ) : (
      <Text style={styles.title}>
        {title}
      </Text>
    )}
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Button;
