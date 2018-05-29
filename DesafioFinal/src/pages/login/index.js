import React, { Component } from 'react';
import { View, Text } from 'react-native';

/* Styles */
import styles from './styles';

class Login extends Component {
  componentDidMount() {
    console.log('LOGIN');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }
}

export default Login;
