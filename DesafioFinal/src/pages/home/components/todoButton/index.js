import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Share, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { Creators as TodoActions } from 'store/ducks/todo';

import { colors, fonts } from 'styles';
import styles from './styles';

class TodoButton extends Component {
  onPress = () => {
    const {
      icon, id, title, description,
    } = this.props;
    if (icon === 'share') {
      this.share(title, description);
    } else {
      this.remove(id);
    }
  };

  share = (title, description) =>
    Share.share({
      title,
      message: description,
      url: 'www.rodrigoangelovalentini.com',
    });

  remove = (id) => {
    this.props.todoRemoveRequest(id);
  };

  render() {
    const { color, icon } = this.props;

    return (
      <TouchableOpacity
        style={[styles.button, styles[color]]}
        onPress={this.onPress}
        activeOpacity={0.6}
      >
        {this.props.loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Icon name={icon} size={fonts.small} color={colors.white} />
        )}
      </TouchableOpacity>
    );
  }
}

TodoButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  todoRemoveRequest: PropTypes.func.isRequired,
};

TodoButton.defaultProps = {
  id: null,
  title: '',
  description: '',
};

const mapStateToProps = state => ({
  loading: state.loading.loading,
});

const mapDispatchToProps = dispatch => ({
  todoRemoveRequest: id => dispatch(TodoActions.todoRemoveRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoButton);
