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
        <Text>Identification</Text>
      </View>
    );
  }
}

export default Identification;
