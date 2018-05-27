import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import styles from './styles';

class Footer extends Component {
  fuller = () => <View style={styles.fullerContainer} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.touchIcon}
            activeOpacity={0.8}
            onPress={() => this.props.jumpToIndex(0)}
          >
            <Icon
              name="home"
              style={[styles.icon, this.props.navigationState.index === 0 && styles.iconAtive]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchIcon}
            activeOpacity={0.8}
            onPress={() => this.props.jumpToIndex(1)}
          >
            <Icon
              name="shopping-cart"
              style={[styles.icon, this.props.navigationState.index === 1 && styles.iconAtive]}
            />
            <View
              style={[styles.fullerContainer, this.props.cart.products.length && styles.green]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Footer.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  jumpToIndex: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
