/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './styles';

export default class Menu extends Component {
  componentDidMount() {
    console.log('BUGGER');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Identification')}>
          <Text style={styles.link}> Identification</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.link}> Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.link}> Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Text style={styles.link}> Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Calendar')}>
          <Text style={styles.link}> Calendar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
