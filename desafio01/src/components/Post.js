import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.author}>{this.props.author}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    color: '#333333',
    fontSize: 16,
  },
  author: {
    color: '#999999',
  },
  description: {
    color: '#666666',
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    marginTop: 5,
    paddingTop: 5,
  },
});
