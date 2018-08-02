import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = ({ defaultTitle }) => ({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {defaultTitle}
        </Text>
      </View>
    );
  },
});

export default Header;
