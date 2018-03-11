import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AlbumItem from './components/AlbumItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlbumsActions } from 'store/ducks/albums';

import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  renderList = () => (
    <FlatList
      data={this.props.albums.data}
      keyExtractor={album => String(album.id)}
      renderItem={({ item }) => <AlbumItem album={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        { this.props.albums.loading
          ? <ActivityIndicator color="#999" style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlbumsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
