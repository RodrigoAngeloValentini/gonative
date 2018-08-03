import React, { Component } from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import { ScrollView } from 'react-native';

import styles from './styles';

const Menu = props => (
  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default Menu;
