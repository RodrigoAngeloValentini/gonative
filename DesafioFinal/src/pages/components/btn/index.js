import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { colors } from 'styles';
import styles from './styles';

const Btn = ({ title, link, loading }) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={link}>
    {loading ? (
      <ActivityIndicator size="small" color={colors.white} />
    ) : (
      <Text style={styles.title}>{title}</Text>
    )}
  </TouchableOpacity>
);

Btn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Btn;
