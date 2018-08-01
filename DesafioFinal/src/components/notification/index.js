import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { connect } from 'react-redux';

import Message from '../message';

import styles from './styles';

class Notification extends Component {
  componentWillMount() {
    this.hideMsg();
  }

  componentDidUpdate() {
    this.hideMsg();
  }

  hideMsg = () => {};

  render() {
    const { show, msg, error } = this.props.notification;
    return (
      <View style={styles.container}>
        {show === true ? <Message msg={msg} error={error} /> : null}
      </View>
    );
  }
}

Notification.defaultProps = {
  notification: {
    show: false,
    msg: '',
    error: '',
  },
};

Notification.propTypes = {
  notification: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);
