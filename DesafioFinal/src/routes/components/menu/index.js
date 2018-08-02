import React, { Component } from 'react';

import {
  View, Text, TouchableOpacity, SafeAreaView,
} from 'react-native';

import styles from './styles';

const Menu = () => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Identification')}>
      <Text style={styles.link}>
        {' '}
Identification
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
      <Text style={styles.link}>
        {' '}
Login
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
      <Text style={styles.link}>
        {' '}
Register
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('Calendar')}>
      <Text style={styles.link}>
        {' '}
Calendar
      </Text>
    </TouchableOpacity>
  </View>
);

export default Menu;
