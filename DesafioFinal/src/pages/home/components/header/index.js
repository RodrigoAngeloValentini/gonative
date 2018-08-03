import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
SCHUDLER
        </Text>
      </View>
    );
  }
}

export default Header;
