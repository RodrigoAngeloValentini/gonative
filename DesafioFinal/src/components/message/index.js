import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, fonts } from 'styles';
import styles from './styles';

const Message = ({ error, msg }) => (
  <View style={[styles.container, styles.show, error === true ? styles.error : styles.success]}>
    <Icon
      name={error ? 'exclamation-triangle' : 'check-circle'}
      size={fonts.regular}
      color={colors.white}
    />
    <Text style={styles.title}>
      {msg}
    </Text>
  </View>
);

Message.propTypes = {
  error: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Message;
