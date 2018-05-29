import React, { Component } from 'react';
import { View, Text } from 'react-native';

/* Styles */
import styles from './styles';

class Register extends Component {
  componentDidMount() {
    console.log('REGISTER');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
      </View>
    );
  }
}

export default Register;
