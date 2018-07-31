import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

class Register extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
Scheduler
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
