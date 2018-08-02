import React, { Component } from 'react';
import VMasker from 'vanilla-masker';

import {
  View, Text, ScrollView, RefreshControl, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { colors, fonts } from 'styles';
import styles from './styles';

import Modal from './components/modal';
import Calendar from './components/calendar';
import TodoItem from './components/todoItem';

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

  emptyMensagem = () => (
    <View style={styles.containerEmpty}>
      <Icon name="calendar" size={fonts.bigger} color={colors.purpleDarker} />
      <Text style={styles.titleEmpty}>
Nada foi encontrado
      </Text>
    </View>
  );

  formatTime = time => VMasker.toPattern(time, '99:99');

  render() {
    const { refreshing, todos } = this.state;
    return (
      <View style={styles.container}>
        <Modal />
        <View style={styles.calendar}>
          <Calendar />
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
            keyExtractor={todo => todo.id}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
