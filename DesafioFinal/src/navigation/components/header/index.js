import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

class Header extends Component {
  componentWillMount() {
    // console.tron.error(this.props);
  }

  render() {
    return <View style={styles.container}>{this.props.defaultTitle}</View>;
  }
}

export default Header;
