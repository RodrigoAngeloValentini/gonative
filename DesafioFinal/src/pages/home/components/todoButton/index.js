import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

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

  share = (title, description) => Share.share({
    title,
    message: description,
    url: 'www.rodrigoangelovalentini.com',
  });

  remove = (id) => {
    console.log('REMOVE', id);
  };

  render() {
    const { color, icon } = this.props;

    return (
      <TouchableOpacity
        style={[styles.button, styles[color]]}
        onPress={this.onPress}
        activeOpacity={0.6}
      >
        <Icon name={icon} size={fonts.small} color={colors.white} />
      </TouchableOpacity>
    );
  }
}

TodoButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

TodoButton.defaultProps = {
  id: null,
  title: '',
  description: '',
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

/* Connecta os dois, podendo ser null */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoButton);
