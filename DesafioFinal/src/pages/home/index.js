import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';

import {
  View, Text, ScrollView, RefreshControl, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';
import { Creators as TodoActions } from 'store/ducks/todo';

import { colors, fonts } from 'styles';
import styles from './styles';

import Modal from './components/modal';
// import Calendar from './components/calendar';
import MiniCalendar from './components/miniCalendar';
import TodoItem from './components/todoItem';
import Header from './components/header';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    refreshing: false,
    todos: [
      {
        id: 1,
        title: 'Text',
        description: 'Description',
        time: '01/08/2018 12:20',
      },
    ],
  };

  componentDidMount() {
    console.log(this.props.navigation);
  }

  emptyMensagem = () => (
    <View style={styles.containerEmpty}>
      <Icon name="calendar" size={fonts.bigger} color={colors.purpleDarker} />
      <Text style={styles.titleEmpty}>
Nada foi encontrado
      </Text>
    </View>
  );

  formatTime = time => VMasker.toPattern(time, '99:99');

  iconLeftOnClick = () => {
    this.props.todoModalOpen();
  };

  iconRightOnClick = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    const { refreshing, todos } = this.state;
    const { modalVisible } = this.props;
    return (
      <View style={styles.container}>
        <Modal visible={modalVisible} />
        <Header
          iconLeftOnClick={() => {
            this.iconLeftOnClick();
          }}
          iconRightOnClick={() => {
            this.iconRightOnClick();
          }}
        />
        <View style={styles.calendar}>
          {/* <Calendar /> */}
          <MiniCalendar />
        </View>
        <ScrollView
          style={styles.scrollview}
          refreshControl={(
            <RefreshControl
              title="Atualizando"
              colors={[colors.white, colors.green, colors.purple]}
              tintColor={colors.green}
              progressBackgroundColor={colors.green}
              refreshing={refreshing}
              onRefresh={() => {}}
            />
)}
        >
          <FlatList
            style={styles.list}
            data={todos}
            ListEmptyComponent={this.emptyMensagem}
            keyExtractor={todo => todo.id.toString()}
            renderItem={todo => (
              <TodoItem
                id={todo.item.id}
                title={todo.item.title}
                description={todo.item.description}
                time={this.formatTime(todo.item.time)}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  todoModalOpen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modalVisible: state.todo.modalVisible,
});

const mapDispatchToProps = dispatch => ({
  todoModalOpen: () => dispatch(TodoActions.todoModalOpen()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Home));
