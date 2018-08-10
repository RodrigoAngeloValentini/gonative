import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, ScrollView, RefreshControl, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';
import { Creators as TodoActions } from 'store/ducks/todo';
import { Creators as CalendarActions } from 'store/ducks/calendar';

import { colors, fonts } from 'styles';
import styles from './styles';

import Modal from './components/modal';
import Calendar from './components/calendar';
import MiniCalendar from './components/miniCalendar';
import TodoItem from './components/todoItem';
import Header from './components/header';

import { formatTime } from 'helpers/dateFunctions';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.todoListRequest();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.props.todoListRequest();
    }
  }

  emptyMensagem = () => (
    <View style={styles.containerEmpty}>
      <Icon name="calendar" size={fonts.bigger} color={colors.purpleDarker} />
      <Text style={styles.titleEmpty}>Nada foi encontrado</Text>
    </View>
  );

  iconLeftOnClick = () => {
    this.props.todoModalOpen();
  };

  iconRightOnClick = () => {
    this.props.navigation.navigate('Profile');
  };

  refreshTodo = () => this.props.todoListRequest();

  render() {
    const {
      modalVisible, showMini, list, refreshing,
    } = this.props;
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
        <View style={styles.calendar}>{showMini ? <MiniCalendar /> : <Calendar />}</View>
        <ScrollView
          onScrollBeginDrag={this.props.showMiniCalendar}
          style={styles.scrollview}
          refreshControl={
            <RefreshControl
              title="Atualizando"
              colors={[colors.white, colors.green, colors.purple]}
              tintColor={colors.green}
              progressBackgroundColor={colors.green}
              refreshing={refreshing}
              onRefresh={() => this.refreshTodo()}
            />
          }
        >
          <FlatList
            style={styles.list}
            data={list}
            ListEmptyComponent={this.emptyMensagem}
            keyExtractor={todo => todo.id.toString()}
            renderItem={todo => (
              <TodoItem
                id={todo.item.id}
                title={todo.item.title}
                description={todo.item.description}
                time={formatTime(todo.item.datetime)}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

Home.defaultProps = {
  list: [],
};

Home.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  todoModalOpen: PropTypes.func.isRequired,
  showMini: PropTypes.bool.isRequired,
  showMiniCalendar: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    datetime: PropTypes.string,
  })),
  todoListRequest: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  list: state.todo.list,
  date: state.calendar.date,
  modalVisible: state.todo.modalVisible,
  showMini: state.calendar.showMini,
  refreshing: state.todo.refreshing,
});

const mapDispatchToProps = dispatch => ({
  todoModalOpen: () => dispatch(TodoActions.todoModalOpen()),
  showMiniCalendar: () => dispatch(CalendarActions.showMiniCalendar()),
  todoListRequest: () => dispatch(TodoActions.todoListRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Home));
