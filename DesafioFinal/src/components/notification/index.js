import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { connect } from 'react-redux';
import { Creators as NotificationActions } from 'store/ducks/notification';

import Message from '../message';

import styles from './styles';

class Notification extends Component {
  componentDidUpdate() {
    this.hideMsg();
  }

  hideMsg = () => {
    const { show } = this.props.notification;
    if (show) {
      setTimeout(() => {
        this.props.notificationHide();
      }, 1500);
    }
  };

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
    error: false,
  },
};

Notification.propTypes = {
  notification: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
  }),
  notificationHide: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  notification: state.notification,
});

const mapDispatchToProps = dispatch => ({
  notificationHide: () => dispatch(NotificationActions.hideNotification()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);
