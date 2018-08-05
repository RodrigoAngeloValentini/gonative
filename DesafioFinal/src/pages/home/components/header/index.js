import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, fonts } from 'styles';
import styles from './styles';

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity
            id="openModal"
            style={styles.iconLeft}
            onPress={this.props.iconLeftOnClick}
          >
            <Icon name="plus" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>

          <View style={styles.containerTitle}>
            <Text style={styles.title}>
SCHUDLER
            </Text>
          </View>

          <TouchableOpacity
            id="openProfile"
            style={styles.iconRight}
            onPress={this.props.iconRightOnClick}
          >
            <Icon name="user" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  iconLeftOnClick: PropTypes.func.isRequired,
  iconRightOnClick: PropTypes.func.isRequired,
};

export default Header;
