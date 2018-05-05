import React from 'react';
import PropTypes from 'prop-types';

import SongList from 'components/SongList';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

const Album = ({ navigation }) => {
  const { album } = navigation.state.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: album.thumbnail }}
        blurRadius={5}
      >
        <View style={styles.thumbnailContent}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.author}>{album.author}</Text>
        </View>
      </ImageBackground>

      <SongList data={album.songs} />
    </View>
  );
};

Album.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        album: PropTypes.shape({
          thumbnail: PropTypes.string,
          title: PropTypes.string,
          author: PropTypes.string,
          songs: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
          })),
        }),
      }),
    }),
  }).isRequired,
};

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});

export default Album;
