import React, { Component } from 'react';
import { View, Text } from 'react-native';

/* Styles */
import styles from './styles';

class Calendar extends Component {
  componentDidMount() {
    console.log('Calendar');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Calendar</Text>
      </View>
    );
  }
}

export default Calendar;
