import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  todoContainer: {
    flexDirection: 'row',
  },
});

const TodoList = props => (
  <View style={styles.container}>
    {props.todos.map(todo => (
      <View key={todo.id} style={styles.todoContainer}>
        <Text>{todo.text}</Text>
        <TouchableOpacity
          onPress={() => {
            props.removeTodo(todo.id);
          }}
        >
          <Text>Deletar</Text>
        </TouchableOpacity>
      </View>
    ))}
    <TouchableOpacity
      onPress={() => {
        props.addTodo('Mais um todo');
      }}
    >
      <Text>Adicionar todo</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
