import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { colors } from 'styles';
import styles from './styles';

import TodoButton from '../todoButton';

class TodoItem extends Component {
  btnShare = () => {
    const { title, description } = this.props;
    return [
      {
        component: (
          <TodoButton color="share" icon="share" title={title} description={description} />
        ),
        backgroundColor: colors.transparent,
      },
    ];
  };

  btnRemove = () => {
    const { id } = this.props;
    return [
      {
        component: <TodoButton color="remove" icon="times" id={id} />,
        backgroundColor: colors.transparent,
      },
    ];
  };

  render() {
    const { title, description, time } = this.props;
    return (
      <Swipeout
        style={styles.swipeout}
        left={this.btnShare()}
        right={this.btnRemove()}
        buttonWidth={55}
        sensitivity={10}
        autoClose
      >
        <View style={styles.eventContainer}>
          <View style={styles.eventText}>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.description}>
              {description}
            </Text>
          </View>
          <Text style={styles.time}>
            {time}
          </Text>
        </View>
      </Swipeout>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default TodoItem;
