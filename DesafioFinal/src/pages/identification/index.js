import React, { Component } from 'react';
import { View, Text } from 'react-native';

/* Styles */
import styles from './styles';

class Identification extends Component {
  componentDidMount() {
    console.log('Identification');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Identification</Text>
      </View>
    );
  }
}

export default Identification;
