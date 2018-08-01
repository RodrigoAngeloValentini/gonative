import React from 'react';
import { View, Text } from 'react-native';

import Notification from 'components/notification';

import styles from './styles';

const Header = ({ defaultTitle }) => ({
  render() {
    return (
      <View style={styles.container}>
        <Notification />
        <Text>
          {defaultTitle}
        </Text>
      </View>
    );
  },
});

export default Header;
