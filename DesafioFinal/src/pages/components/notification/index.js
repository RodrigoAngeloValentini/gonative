import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { connect } from 'react-redux';
import NotificationActions from 'redux/ducks/notification';

import Msg from './components/msg';

import styles from './styles';

class Notification extends Component {
  static propTypes = {
    notification: PropTypes.shape({
      show: PropTypes.bool.isRequired,
      msg: PropTypes.string.isRequired,
      error: PropTypes.bool.isRequired,
    }).isRequired,
    notificationHide: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.hideMsg();
  }

  componentDidUpdate() {
    this.hideMsg();
  }

  hideMsg = () => {
    if (this.props.notification.show) {
      setTimeout(() => {
        this.props.notificationHide();
      }, 3000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.notification.show === true ? (
          <Msg
            msg={this.props.notification.msg}
            error={this.props.notification.error}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  notification: state.notification,
});

const mapDispatchToProps = dispatch => ({
  notificationHide: () => dispatch(NotificationActions.notificationHide()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);
