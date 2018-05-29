import React, { Component } from 'react';
import { View, Text } from 'react-native';

/* Styles */
import styles from './styles';

class Dashboard extends Component {
  componentDidMount() {
    console.log('Dashboard');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

export default Dashboard;
