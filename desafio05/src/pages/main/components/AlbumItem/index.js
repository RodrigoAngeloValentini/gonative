import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';

const AlbumItem = ({ album, navigate }) => (
  <TouchableOpacity onPress={() => { navigate({ routeName: 'Album', params: { album } }); }} style={styles.container}>
    <Image style={styles.thumbnail} source={{ uri: album.thumbnail }} />
    <View style={styles.info}>
      <Text style={styles.title}>{album.title}</Text>
      <Text style={styles.author}>{album.author}</Text>
    </View>
    <Icon name="more-horiz" size={24} style={styles.more} />
  </TouchableOpacity>
);

AlbumItem.propTypes = {
  album: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  navigate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationActions, dispatch);

export default connect(null, mapDispatchToProps)(AlbumItem);
