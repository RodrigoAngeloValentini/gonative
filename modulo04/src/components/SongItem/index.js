import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SongItem = ({ song, player, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>
    { player.loading === song.id
      ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
      : <Icon name="play-circle-outline" size={24} style={styles.more} /> }
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  player: PropTypes.shape({
    loading: PropTypes.oneOfType([null, PropTypes.number]),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(SongItem);
