import React, { Component } from 'react';

import { View } from 'react-native';

import styles from './styles';

class Footer extends Component {
  componentWillMount() {
    // console.tron.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer} />
      </View>
    );
  }
}

export default Footer;
