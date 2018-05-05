import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Post from './components/Post';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Aprendendo React Native',
          author: 'Rodrigo Angelo Valentini',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        },
        {
          id: 2,
          title: 'Aprendendo React Native',
          author: 'Rodrigo Angelo Valentini',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        },
        {
          id: 3,
          title: 'Aprendendo React Native',
          author: 'Rodrigo Angelo Valentini',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView style={styles.container}>
          {this.state.posts.map(post => {
            return (
              <Post
                key={post.id}
                title={post.title}
                author={post.author}
                description={post.description}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  header: {
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#333333',
    fontSize: 16,
  },
  container: {
    backgroundColor: '#EE7777',
    margin: 20,
  },
});
