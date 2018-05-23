import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Identification extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SCHEDULER</Text>
      </View>
    );
  }
}

export default Identification;
