import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const Post = props => {
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.author}>{props.author}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

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

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
