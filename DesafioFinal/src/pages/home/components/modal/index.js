import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Modal as ModalReact, TouchableOpacity, View, Text,
} from 'react-native';

import Button from 'components/button';
import Input from 'components/input';
import Datepicker from 'components/datepicker';

import { connect } from 'react-redux';
import { Creators as TodoActions } from 'store/ducks/todo';

import styles from './styles';

class Modal extends Component {
  state = { dateTime: '', title: '', description: '' };

  render() {
    const { visible } = this.props;
    const { dateTime, title, description } = this.state;
    return (
      <ModalReact transparent visible={visible} animationType="fade" onRequestClose={() => {}}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.header}>
              <Text style={styles.title}>
Criar Evento
              </Text>
            </View>
            <View>
              <Datepicker
                title="Selecione data e horário"
                icon="calendar"
                color="gray"
                date={dateTime}
                onDateChange={(value) => {
                  this.setState({ dateTime: value });
                }}
              />
              <Input
                title="Qual nome do evento ?"
                icon="comment"
                onChangeText={value => this.setState({ title: value })}
                value={title}
                keyboardType="default"
                color="gray"
              />
              <Input
                title="Onde Ocorrerá ?"
                icon="comments"
                onChangeText={value => this.setState({ description: value })}
                value={description}
                keyboardType="default"
                color="gray"
              />
              <Button title="Criar evento" onPress={() => {}} loading={false} />
            </View>

            <View style={styles.bottom}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  this.props.todoModalClose();
                }}
              >
                <Text style={styles.backTitle}>
                  {' '}
Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ModalReact>
    );
  }
}

Modal.defaultProps = {
  visible: false,
};

Modal.propTypes = {
  visible: PropTypes.bool,
  todoModalClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  todoModalClose: () => dispatch(TodoActions.todoModalClose()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
