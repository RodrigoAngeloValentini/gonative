import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Filter = props => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        props.filterBy('all');
      }}
    >
      <Text style={[styles.option, props.filterType === 'all' ? styles.optionActive : null]}>
        Todas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        props.filterBy('open');
      }}
    >
      <Text style={[styles.option, props.filterType === 'open' ? styles.optionActive : null]}>
        Abertas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        props.filterBy('closed');
      }}
    >
      <Text style={[styles.option, props.filterType === 'closed' ? styles.optionActive : null]}>
        Fechadas
      </Text>
    </TouchableOpacity>
  </View>
);

Filter.defaultProps = {
  filterType: 'all',
};

Filter.propTypes = {
  filterBy: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'open', 'closed']),
};

export default Filter;
