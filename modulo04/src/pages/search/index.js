import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SearchActions } from 'store/ducks/search';
import { debounce } from 'lodash';

import { View, TextInput, ActivityIndicator } from 'react-native';
import SongList from 'components/SongList';

import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    title: 'Busca',
  };

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    search: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.searchRequest = debounce(this.props.searchRequest, 500);
  }

  state = {
    searchInput: '',
  };

  search = (searchInput) => {
    this.setState({ searchInput });

    this.searchRequest(searchInput);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar por músicas..."
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            value={this.state.searchInput}
            onChangeText={this.search}
          />
        </View>

        { this.props.search.loading && <ActivityIndicator color="#999" style={styles.loading} /> }

        <SongList data={this.props.search.data} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
