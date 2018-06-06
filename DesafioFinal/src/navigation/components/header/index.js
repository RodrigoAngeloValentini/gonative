import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Header extends Component {
  componentWillMount() {
    // console.tron.error(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.defaultTitle}</Text>
      </View>
    );
  }
}

export default Header;
